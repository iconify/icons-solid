import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rw1my-btz.css';
import '../../css/z/z61kbgi8p.css';
import '../../css/b/bgjf4cbzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rw1my-btz"/><path class="z61kbgi8p"/><path class="bgjf4cbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagnostic-desktop"} {...others} />);
}

export default Component;
