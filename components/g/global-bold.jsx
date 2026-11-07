import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7_h2kbdq.css';
import '../../css/h/hf83gzbzx.css';
import '../../css/s/sh7ni8bsi.css';
import '../../css/j/j3sofdbhr.css';
import '../../css/y/yfwp74xij.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k7_h2kbdq"/><path class="hf83gzbzx"/><path class="sh7ni8bsi"/><path class="j3sofdbhr"/><path class="yfwp74xij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:global-bold"} {...others} />);
}

export default Component;
