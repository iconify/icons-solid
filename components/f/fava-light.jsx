import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz4_n_nrk.css';
import '../../css/i/ipw0oib4v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jz4_n_nrk"/><path class="ipw0oib4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fava-light"} {...others} />);
}

export default Component;
