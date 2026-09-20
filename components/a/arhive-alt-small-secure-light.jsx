import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u1x-e7bql.css';
import '../../css/o/ohl5bf8km.css';
import '../../css/m/m81p5qbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="u1x-e7bql"/><path class="ohl5bf8km"/><path class="m81p5qbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-small-secure-light"} {...others} />);
}

export default Component;
