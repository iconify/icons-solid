import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k77157k9j.css';
import '../../css/i/idhse7v6j.css';
import '../../css/u/u-yc98b4d.css';
import '../../css/g/gko-hiyzu.css';
import '../../css/n/nv0o7acvk.css';
import '../../css/l/l6etxkbfp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k77157k9j"/><circle class="idhse7v6j"/><path class="u-yc98b4d"/><path class="gko-hiyzu"/><path class="nv0o7acvk"/><circle class="l6etxkbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitarr-dark"} {...others} />);
}

export default Component;
