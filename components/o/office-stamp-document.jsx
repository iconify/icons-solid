import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-lf6evcg.css';
import '../../css/o/oxa3pkv3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u-lf6evcg"/><path class="oxa3pkv3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-stamp-document"} {...others} />);
}

export default Component;
