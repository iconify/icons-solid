import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/blcdb5b4m.css';
import '../../css/o/o8umcibez.css';
import '../../css/j/jsuq6yb5a.css';
import '../../css/a/av607wbae.css';
import '../../css/v/vaqmqtb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="blcdb5b4m wm-shadow"/><path class="o8umcibez wm-shadow"/><path class="jsuq6yb5a"/><path class="av607wbae"/><path class="vaqmqtb8b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:alarm-clock-check"} {...others} />);
}

export default Component;
