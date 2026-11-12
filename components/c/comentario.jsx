import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xatinu_2d.css';
import '../../css/v/v1w24bcca.css';
import '../../css/c/cn8nznbsb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xatinu_2d"/><path class="v1w24bcca"/><path class="cn8nznbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:comentario"} {...others} />);
}

export default Component;
