import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3fz5ybsb.css';
import '../../css/v/vnhubhthd.css';
import '../../css/f/fkas6vb7y.css';
import '../../css/v/vek4heose.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="g3fz5ybsb"/><path class="vnhubhthd"/><path class="fkas6vb7y"/><path class="vek4heose"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:anchor"} {...others} />);
}

export default Component;
