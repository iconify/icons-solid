import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2x05ox4c.css';
import '../../css/u/uyqlyjidv.css';
import '../../css/y/ychcxgb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l2x05ox4c"/><path class="uyqlyjidv"/><path class="ychcxgb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:waves-shark"} {...others} />);
}

export default Component;
