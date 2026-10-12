import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6bep90pz.css';
import '../../css/i/i28y05vcn.css';
import '../../css/y/yz_5if6hn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l6bep90pz"/><path class="i28y05vcn"/><path class="yz_5if6hn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-heart"} {...others} />);
}

export default Component;
