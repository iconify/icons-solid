import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg7ugbc9u.css';
import '../../css/k/k9yprybcj.css';
import '../../css/u/ubzucrd0s.css';
import '../../css/f/frg4d254j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zg7ugbc9u"/><path class="k9yprybcj"/><path class="ubzucrd0s"/><path class="frg4d254j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:duckdns"} {...others} />);
}

export default Component;
