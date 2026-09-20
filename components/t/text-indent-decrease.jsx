import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v0yato31m.css';
import '../../css/t/tic_rjbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v0yato31m"/><path class="tic_rjbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-indent-decrease"} {...others} />);
}

export default Component;
