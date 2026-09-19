import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyjuwwbmv.css';
import '../../css/n/nv_u-tbfc.css';
import '../../css/k/k7hknob4f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wyjuwwbmv"/><path class="nv_u-tbfc"/><path class="k7hknob4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fountain-pen"} {...others} />);
}

export default Component;
