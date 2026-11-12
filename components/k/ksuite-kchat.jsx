import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yegc-sbkr.css';
import '../../css/l/l390iecly.css';
import '../../css/o/oxf-v8-ae.css';
import '../../css/d/d1ccs6skz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yegc-sbkr"/><path class="l390iecly"/><path class="oxf-v8-ae"/><path class="d1ccs6skz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kchat"} {...others} />);
}

export default Component;
