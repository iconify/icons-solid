import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i7pf5v_rd.css';
import '../../css/t/t46qu6_oj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i7pf5v_rd"/><path class="t46qu6_oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:droplet"} {...others} />);
}

export default Component;
