import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3ra9bezo.css';
import '../../css/c/cw9m31tdc.css';
import '../../css/f/fd7qk3c9k.css';
import '../../css/y/yc5juqbqa.css';
import '../../css/j/jec384x6q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e3ra9bezo"/><path class="cw9m31tdc"/><path class="fd7qk3c9k"/><path class="yc5juqbqa"/><path class="jec384x6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homescreen-hero"} {...others} />);
}

export default Component;
