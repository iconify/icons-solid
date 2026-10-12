import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svpoicb8f.css';
import '../../css/m/mvjz70zlv.css';
import '../../css/g/gz6fy7bjr.css';
import '../../css/f/ftlm9ha6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="svpoicb8f"/><rect class="mvjz70zlv"/><path class="gz6fy7bjr"/><path class="ftlm9ha6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-cpu"} {...others} />);
}

export default Component;
