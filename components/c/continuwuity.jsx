import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvo5yb4jk.css';
import '../../css/d/d5k0bgbry.css';
import '../../css/s/s4f0-m1sd.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="yvo5yb4jk"/><path class="d5k0bgbry"/><path class="s4f0-m1sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:continuwuity"} {...others} />);
}

export default Component;
