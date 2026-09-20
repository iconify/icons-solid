import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l400bnd5u.css';
import '../../css/r/rj5v1bbrm.css';
import '../../css/y/yvwyapbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l400bnd5u"/><rect transform="matrix(-1 0 0 1 19.75 7.75)" class="rj5v1bbrm"/><rect transform="matrix(-1 0 0 1 10.25 2.75)" class="yvwyapbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:align-bottom"} {...others} />);
}

export default Component;
