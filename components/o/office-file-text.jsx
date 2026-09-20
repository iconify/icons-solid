import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nez2uwj1y.css';
import '../../css/x/xw8s3cc_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nez2uwj1y"/><path class="xw8s3cc_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-file-text"} {...others} />);
}

export default Component;
