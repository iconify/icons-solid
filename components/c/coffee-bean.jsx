import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs67oqbzr.css';
import '../../css/s/snk9z_7lz.css';
import '../../css/w/wopv2hbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gs67oqbzr"/><path class="snk9z_7lz"/><path class="wopv2hbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:coffee-bean"} {...others} />);
}

export default Component;
