import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y260qjo9u.css';
import '../../css/k/kvtyxvn8k.css';
import '../../css/y/yj-rpobms.css';

const viewBox = {"width":50,"height":50};
const content = `<circle class="y260qjo9u"/><circle class="kvtyxvn8k"/><path class="yj-rpobms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:grocery-or-supermarket"} {...others} />);
}

export default Component;
