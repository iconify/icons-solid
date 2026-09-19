import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/q7q6hachp.css';
import '../../css/w/wf0flhbfc.css';
import '../../css/a/alyw-jbci.css';
import '../../css/d/dl79pvbaw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="to-5kdesz"><path class="q7q6hachp"/><path class="wf0flhbfc"/><path class="alyw-jbci"/><path class="dl79pvbaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:target-pointer"} {...others} />);
}

export default Component;
