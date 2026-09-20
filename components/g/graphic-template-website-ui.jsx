import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/r5c99opiy.css';
import '../../css/t/tbd4akb2n.css';
import '../../css/v/vz4lvsbbz.css';
import '../../css/a/alul2bc2y.css';
import '../../css/a/ac8g9ubol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="r5c99opiy"/><path class="tbd4akb2n"/><path class="vz4lvsbbz"/><path class="alul2bc2y"/><path class="ac8g9ubol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:graphic-template-website-ui"} {...others} />);
}

export default Component;
