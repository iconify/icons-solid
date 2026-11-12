import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/legs_-oed.css';
import '../../css/n/ny5b9ebqn.css';
import '../../css/n/n7g6991ym.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="legs_-oed"/><path class="ny5b9ebqn"/><path class="n7g6991ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-swisstransfer-dark"} {...others} />);
}

export default Component;
