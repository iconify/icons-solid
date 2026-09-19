import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6wl26b_a.css';
import '../../css/g/gh_u1c66p.css';
import '../../css/z/z_3d8eb9h.css';
import '../../css/k/k0nky2wkk.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="a6wl26b_a"/><circle class="gh_u1c66p"/><circle class="z_3d8eb9h"/><path class="k0nky2wkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:code-working-sharp"} {...others} />);
}

export default Component;
