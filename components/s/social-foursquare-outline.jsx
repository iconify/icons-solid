import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc81c-b-o.css';
import '../../css/y/ymu2chbcz.css';
import '../../css/m/mvj4cdb7t.css';
import '../../css/t/t013kn23x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qc81c-b-o"/><path class="ymu2chbcz"/><path class="mvj4cdb7t"/><path class="t013kn23x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-foursquare-outline"} {...others} />);
}

export default Component;
