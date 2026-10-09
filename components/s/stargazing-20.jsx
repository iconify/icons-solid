import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i33xfsc3n.css';
import '../../css/k/k3w3y09sg.css';
import '../../css/u/u1fsh4agr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i33xfsc3n"/><path class="k3w3y09sg"/><path class="u1fsh4agr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stargazing-20"} {...others} />);
}

export default Component;
