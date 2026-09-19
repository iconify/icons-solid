import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0f-scclc.css';
import '../../css/a/a-gh_pbjk.css';
import '../../css/m/me9tsg_kt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t0f-scclc"/><path class="a-gh_pbjk"/><circle class="me9tsg_kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-train"} {...others} />);
}

export default Component;
