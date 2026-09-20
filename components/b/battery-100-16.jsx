import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffaginb4b.css';
import '../../css/i/i1z3osb_g.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ffaginb4b"/><path class="i1z3osb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:battery-100-16"} {...others} />);
}

export default Component;
