import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rdwumotqb.css';
import '../../css/n/ntse7sb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rdwumotqb"/><path class="ntse7sb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:surveillance-camera"} {...others} />);
}

export default Component;
