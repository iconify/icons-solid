import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r0hmkxtxf.css';
import '../../css/n/nz6ta7yil.css';
import '../../css/j/jvvu3bbeh.css';
import '../../css/i/i42jhdcnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r0hmkxtxf"/><path class="nz6ta7yil"/><path class="jvvu3bbeh"/><path class="i42jhdcnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-to-video"} {...others} />);
}

export default Component;
