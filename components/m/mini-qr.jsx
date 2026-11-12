import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgw988bsm.css';
import '../../css/g/gn5j3-b2t.css';
import '../../css/u/u11od-bgv.css';
import '../../css/f/fzy27luea.css';
import '../../css/e/ejk1ck6md.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zgw988bsm"/><path class="gn5j3-b2t"/><path class="u11od-bgv"/><path class="fzy27luea"/><path class="ejk1ck6md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mini-qr"} {...others} />);
}

export default Component;
