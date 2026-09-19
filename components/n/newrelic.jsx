import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhmbx9-pc.css';
import '../../css/w/w92r8zftn.css';
import '../../css/v/v3w7a-bmx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lhmbx9-pc"/><path class="w92r8zftn"/><path class="v3w7a-bmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:newrelic"} {...others} />);
}

export default Component;
