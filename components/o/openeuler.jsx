import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmeey5brg.css';
import '../../css/q/q194_cbxg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lmeey5brg"/><path class="q194_cbxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openeuler"} {...others} />);
}

export default Component;
