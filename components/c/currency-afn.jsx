import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/idgzbkb5s.css';
import '../../css/d/dmv258b4d.css';
import '../../css/q/qa2cdb8_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="idgzbkb5s"/><path class="dmv258b4d"/><path class="qa2cdb8_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-afn"} {...others} />);
}

export default Component;
