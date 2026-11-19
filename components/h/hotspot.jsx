import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja9hnlcji.css';
import '../../css/g/gygftbb3e.css';
import '../../css/s/sklpvw9aq.css';
import '../../css/s/sz8f-fb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ja9hnlcji"/><path class="gygftbb3e"/><path class="sklpvw9aq"/><path class="sz8f-fb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hotspot"} {...others} />);
}

export default Component;
