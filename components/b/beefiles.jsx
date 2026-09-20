import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysinye0wp.css';
import '../../css/d/duw7vs3po.css';
import '../../css/o/o3v3nubmo.css';
import '../../css/r/rui2_f6im.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ysinye0wp"/><path class="duw7vs3po"/><path class="o3v3nubmo"/><path class="rui2_f6im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beefiles"} {...others} />);
}

export default Component;
