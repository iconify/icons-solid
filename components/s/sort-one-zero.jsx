import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-_esxu6d.css';
import '../../css/t/to2fhmeuh.css';
import '../../css/g/gfqeb836v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d-_esxu6d"/><rect class="to2fhmeuh"/><path class="gfqeb836v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sort-one-zero"} {...others} />);
}

export default Component;
