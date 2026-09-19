import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9lvvyq7t.css';
import '../../css/i/iibccoean.css';
import '../../css/g/g4p9n4y6r.css';
import '../../css/g/gwp5qttmz.css';
import '../../css/b/bfaiun2nu.css';
import '../../css/r/rwhlyzzkr.css';
import '../../css/x/xjtu3z1ie.css';
import '../../css/t/tuyah0tvm.css';
import '../../css/d/d7v2y1neo.css';
import '../../css/r/rzcb49bbj.css';
import '../../css/a/a_3nr6b5v.css';
import '../../css/u/u16wxhvrs.css';
import '../../css/f/fyy6bybec.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="o9lvvyq7t"/><path class="iibccoean"/><path class="g4p9n4y6r"/><path class="gwp5qttmz"/><path class="bfaiun2nu"/><path class="rwhlyzzkr"/><path class="xjtu3z1ie"/><path class="tuyah0tvm"/><path class="d7v2y1neo"/><path class="rzcb49bbj"/><path class="a_3nr6b5v"/><path class="u16wxhvrs"/><path class="fyy6bybec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-frowning-medium"} {...others} />);
}

export default Component;
