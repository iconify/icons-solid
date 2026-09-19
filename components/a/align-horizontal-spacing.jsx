import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dokfz_bzr.css';
import '../../css/c/ceyquq90j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dokfz_bzr"/><path class="ceyquq90j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:align-horizontal-spacing"} {...others} />);
}

export default Component;
