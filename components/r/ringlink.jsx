import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcowhso_o.css';
import '../../css/v/vnjuuubcl.css';
import '../../css/o/oxuzwkbyu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zcowhso_o"/><path class="vnjuuubcl"/><path class="oxuzwkbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ringlink"} {...others} />);
}

export default Component;
