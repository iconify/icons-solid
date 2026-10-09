import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7m3rdb3k.css';
import '../../css/s/s9upufoui.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z7m3rdb3k"/><path class="s9upufoui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:burger-20-bold"} {...others} />);
}

export default Component;
