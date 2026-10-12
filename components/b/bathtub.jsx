import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y81860boh.css';
import '../../css/j/jh28cs_-l.css';
import '../../css/b/bm8idnbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y81860boh"/><path class="jh28cs_-l"/><path class="bm8idnbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bathtub"} {...others} />);
}

export default Component;
