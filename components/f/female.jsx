import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfomdp99f.css';
import '../../css/i/i-5-10sby.css';

const viewBox = {"width":50,"height":50};
const content = `<circle class="xfomdp99f"/><path class="i-5-10sby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:female"} {...others} />);
}

export default Component;
