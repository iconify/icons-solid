import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4tdwlciq.css';
import '../../css/c/ca1v0e7az.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="m4tdwlciq"/><path class="ca1v0e7az"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:electronic-arts"} {...others} />);
}

export default Component;
