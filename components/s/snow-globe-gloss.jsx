import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tyst-ib2o.css';
import '../../css/m/m2l8jwcvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="tyst-ib2o wm-k"/><path class="m2l8jwcvz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snow-globe-gloss"} {...others} />);
}

export default Component;
