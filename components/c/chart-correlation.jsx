import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a31n6tbdy.css';
import '../../css/w/w441h2b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a31n6tbdy"/><path class="w441h2b1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-correlation"} {...others} />);
}

export default Component;
