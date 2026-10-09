import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajbt87aul.css';
import '../../css/b/bjh1ltbve.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ajbt87aul"/><path class="bjh1ltbve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lockbox-20-bold"} {...others} />);
}

export default Component;
