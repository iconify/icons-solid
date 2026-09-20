import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxhl7lpbj.css';
import '../../css/y/yhnin7b0y.css';
import '../../css/b/bix9qiwrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pxhl7lpbj"/><path class="yhnin7b0y"/><path class="bix9qiwrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-storj"} {...others} />);
}

export default Component;
