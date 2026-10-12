import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsn51xbdb.css';
import '../../css/d/dkt1wo1ce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qsn51xbdb"/><path class="dkt1wo1ce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tangent"} {...others} />);
}

export default Component;
