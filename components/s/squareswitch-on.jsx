import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m2to84buo.css';
import '../../css/t/tv_zrj9lf.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="m2to84buo"/><path class="tv_zrj9lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:squareswitch-on"} {...others} />);
}

export default Component;
