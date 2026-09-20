import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej14j9sfh.css';
import '../../css/z/zo_11uqpw.css';
import '../../css/l/l98uwwbdd.css';
import '../../css/o/okdfe1bjt.css';
import '../../css/t/ttt017b2d.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jyheu0uie.css';
import '../../css/h/hnyo0gbcu.css';
import '../../css/q/qmypyen1r.css';
import '../../css/a/ah98pgb8x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ej14j9sfh"/><path class="zo_11uqpw"/><path class="l98uwwbdd"/><path class="okdfe1bjt"/><path class="ttt017b2d"/><g class="jn8qy4bru"><path class="jyheu0uie"/><path class="hnyo0gbcu"/><path class="qmypyen1r"/></g><path class="ah98pgb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:joint-pain"} {...others} />);
}

export default Component;
