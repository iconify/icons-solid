import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cuimd9b-p.css';
import '../../css/r/rj5v1bbrm.css';
import '../../css/y/yvwyapbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cuimd9b-p"/><rect transform="matrix(0 -1 -1 0 16.25 19.75)" class="rj5v1bbrm"/><rect transform="matrix(0 -1 -1 0 21.25 10.25)" class="yvwyapbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:align-left"} {...others} />);
}

export default Component;
