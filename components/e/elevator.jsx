import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzfeitich.css';
import '../../css/j/jzxguacfp.css';
import '../../css/v/v8s6amb7d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qzfeitich"/><path class="jzxguacfp"/><path class="v8s6amb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:elevator"} {...others} />);
}

export default Component;
