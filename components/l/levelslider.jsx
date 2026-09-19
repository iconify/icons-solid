import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj11_sb5g.css';
import '../../css/g/g0irkt0rl.css';
import '../../css/i/ikh3n7nzg.css';
import '../../css/m/mn5jq8ovs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uj11_sb5g"/><path class="g0irkt0rl"/><path class="ikh3n7nzg"/><path class="mn5jq8ovs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:levelslider"} {...others} />);
}

export default Component;
