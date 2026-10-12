import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bprebx11j.css';
import '../../css/o/ofznhc5pn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bprebx11j"/><path class="ofznhc5pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-panel-20-bold"} {...others} />);
}

export default Component;
