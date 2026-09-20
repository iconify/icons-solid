import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdr4ynbph.css';
import '../../css/y/y-mhm093y.css';
import '../../css/v/v286mkswn.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="qdr4ynbph"/><path class="y-mhm093y"/><path class="v286mkswn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:usdc"} {...others} />);
}

export default Component;
