import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/olw30ybsu.css';
import '../../css/f/fct34ac3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="olw30ybsu"/><path class="fct34ac3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fingerprint"} {...others} />);
}

export default Component;
