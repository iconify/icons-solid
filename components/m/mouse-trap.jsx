import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yiq4vbqgo.css';
import '../../css/i/il27q6b-h.css';
import '../../css/o/ol0q7bc2e.css';
import '../../css/f/fdhplubdd.css';
import '../../css/u/uyu1o354y.css';
import '../../css/b/b4ghdybvq.css';
import '../../css/o/olb8ybcnr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/ys1fp1bui.css';
import '../../css/b/bvu620ber.css';
import '../../css/g/gj5b6xf5g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yiq4vbqgo"/><path class="il27q6b-h"/><path class="ol0q7bc2e"/><path class="fdhplubdd"/><path class="uyu1o354y"/><ellipse class="b4ghdybvq"/><ellipse class="olb8ybcnr"/><g class="jn8qy4bru"><path class="ys1fp1bui"/><path class="bvu620ber"/><path class="gj5b6xf5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mouse-trap"} {...others} />);
}

export default Component;
