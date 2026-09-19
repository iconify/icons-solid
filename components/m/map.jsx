import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmh8mh4vt.css';
import '../../css/i/i2w-csbly.css';
import '../../css/a/aj4bo5b4g.css';
import '../../css/c/cavwnqb-l.css';
import '../../css/d/dst0w2b6b.css';
import '../../css/w/w62a-bbfz.css';
import '../../css/g/gcpjf8bij.css';
import '../../css/n/nmiiw0bnu.css';
import '../../css/d/d2_iptbqd.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="nmh8mh4vt"/><path clip-rule="evenodd" class="i2w-csbly"/><path clip-rule="evenodd" class="aj4bo5b4g"/><path clip-rule="evenodd" class="cavwnqb-l"/><path clip-rule="evenodd" class="dst0w2b6b"/><path class="w62a-bbfz"/><path clip-rule="evenodd" class="gcpjf8bij"/><path class="nmiiw0bnu"/><path clip-rule="evenodd" class="d2_iptbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:map"} {...others} />);
}

export default Component;
