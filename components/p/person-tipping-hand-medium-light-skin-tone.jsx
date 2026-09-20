import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo3gx290o.css';
import '../../css/l/lpglpkbep.css';
import '../../css/m/m_3j6l03n.css';
import '../../css/k/kxqbvcc2z.css';
import '../../css/h/h39rjmbwt.css';
import '../../css/x/x3jv5h8ph.css';
import '../../css/g/glg778air.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="eo3gx290o"/><path class="lpglpkbep"/><path class="m_3j6l03n"/><path class="kxqbvcc2z"/><path class="h39rjmbwt"/><path class="x3jv5h8ph"/><path class="glg778air"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-tipping-hand-medium-light-skin-tone"} {...others} />);
}

export default Component;
