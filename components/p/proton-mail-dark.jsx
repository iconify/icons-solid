import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p39_dg31u.css';
import '../../css/l/lj93ifb1w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p39_dg31u"/><path class="lj93ifb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-mail-dark"} {...others} />);
}

export default Component;
