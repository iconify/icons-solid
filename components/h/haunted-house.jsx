import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jak1ebb5a.css';
import '../../css/r/rzs-s7bar.css';
import '../../css/e/eai4gpb3j.css';
import '../../css/a/avyo3zous.css';
import '../../css/q/qlqsnebht.css';
import '../../css/x/xcl0fzbzj.css';
import '../../css/g/gszcysz6x.css';
import '../../css/x/xooqywp3w.css';
import '../../css/h/h9tmh86pj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jak1ebb5a wm-shadow"/><path class="rzs-s7bar wm-s"/><path class="eai4gpb3j wm-shadow"/><path class="avyo3zous"/><path class="qlqsnebht"/><path class="xcl0fzbzj"/><path class="gszcysz6x wm-s"/><path class="wm-s xooqywp3w"/><path class="h9tmh86pj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:haunted-house"} {...others} />);
}

export default Component;
