import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dur0b2p3t.css';
import '../../css/o/otq39xo5k.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dur0b2p3t"/><path class="otq39xo5k"/><path class="e_6_n4b0n"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-armenia"} {...others} />);
}

export default Component;
