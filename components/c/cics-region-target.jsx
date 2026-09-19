import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfm8gg1mw.css';
import '../../css/g/g9n4ckv2m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rfm8gg1mw"/><path class="g9n4ckv2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cics-region-target"} {...others} />);
}

export default Component;
