import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/og3htybmp.css';
import '../../css/m/mi0h_mh5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="og3htybmp"/><path class="mi0h_mh5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-ligature"} {...others} />);
}

export default Component;
