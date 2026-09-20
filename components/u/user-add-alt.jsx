import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/w/wcc3xccni.css';
import '../../css/s/spr08kbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><circle class="wcc3xccni"/><path class="spr08kbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-add-alt"} {...others} />);
}

export default Component;
