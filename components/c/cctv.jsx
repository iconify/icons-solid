import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oidghubzp.css';
import '../../css/c/cvjvrzlib.css';
import '../../css/z/zscc4vb3e.css';
import '../../css/g/gvrjuabrt.css';
import '../../css/x/xrp0n01sp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(15 3.47 2.77)" class="oidghubzp"/><rect transform="rotate(15 3.47 2.77)" class="cvjvrzlib"/><path class="zscc4vb3e"/><path class="gvrjuabrt"/><path class="xrp0n01sp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cctv"} {...others} />);
}

export default Component;
