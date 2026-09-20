import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f5q4o4bqu.css';
import '../../css/g/gf-esmbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="f5q4o4bqu"/><path class="gf-esmbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bell"} {...others} />);
}

export default Component;
