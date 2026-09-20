import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugcmfac-c.css';
import '../../css/n/nqeft6d_u.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="ugcmfac-c"/><path class="nqeft6d_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:fire-extinguisher"} {...others} />);
}

export default Component;
