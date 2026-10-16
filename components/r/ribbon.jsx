import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffgrtx06n.css';
import '../../css/v/vm6sxcbbp.css';
import '../../css/s/skvsa8hkm.css';
import '../../css/n/nr8egexwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ffgrtx06n"/><path class="vm6sxcbbp"/><path class="skvsa8hkm"/><path class="nr8egexwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ribbon"} {...others} />);
}

export default Component;
