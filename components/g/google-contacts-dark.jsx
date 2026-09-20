import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phb0fspex.css';
import '../../css/o/okn01-ktv.css';
import '../../css/f/fipn1mb5i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="phb0fspex"/><path class="okn01-ktv"/><path class="fipn1mb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-contacts-dark"} {...others} />);
}

export default Component;
