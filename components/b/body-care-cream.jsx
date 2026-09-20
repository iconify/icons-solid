import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lfmha0bkj.css';
import '../../css/u/ug9u4gh7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lfmha0bkj"/><path class="ug9u4gh7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:body-care-cream"} {...others} />);
}

export default Component;
