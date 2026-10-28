import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afc2go00o.css';
import '../../css/e/edmiowbew.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="afc2go00o"/><path class="edmiowbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flux-operator-light"} {...others} />);
}

export default Component;
