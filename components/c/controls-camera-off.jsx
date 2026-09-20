import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gafjo-buw.css';
import '../../css/i/iysewdb8t.css';
import '../../css/s/s9ph_x6ek.css';
import '../../css/q/qk6vqdbvt.css';
import '../../css/b/b5yfp4biu.css';
import '../../css/j/jkgtbmbcp.css';
import '../../css/v/vidwmxncc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gafjo-buw"/><path class="iysewdb8t"/><path class="s9ph_x6ek"/><path class="qk6vqdbvt"/><path class="b5yfp4biu"/><path class="jkgtbmbcp"/><path class="vidwmxncc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:controls-camera-off"} {...others} />);
}

export default Component;
