import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a7lal5baw.css';
import '../../css/m/mw66p5bqy.css';
import '../../css/s/s12xh-w7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a7lal5baw"/><path class="mw66p5bqy"/><path class="s12xh-w7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shuffle"} {...others} />);
}

export default Component;
