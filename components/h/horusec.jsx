import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwg36gq5v.css';
import '../../css/y/ylqkw_bra.css';
import '../../css/o/oa840obqu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="fwg36gq5v"><path class="ylqkw_bra"/><path class="oa840obqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:horusec"} {...others} />);
}

export default Component;
