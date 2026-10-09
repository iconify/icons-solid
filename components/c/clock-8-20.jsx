import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/a/a9_uu3bmy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="a9_uu3bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-8-20"} {...others} />);
}

export default Component;
