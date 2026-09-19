import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sr7lc_bco.css';
import '../../css/v/vf6rctb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sr7lc_bco"/><path class="vf6rctb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-liquid-soap"} {...others} />);
}

export default Component;
