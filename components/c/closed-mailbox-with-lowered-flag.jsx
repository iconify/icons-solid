import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpof57bix.css';
import '../../css/z/z5o5m7b-a.css';
import '../../css/o/o2j0bab4m.css';
import '../../css/c/ch7wwibvg.css';
import '../../css/a/a360h6x4c.css';
import '../../css/b/brbw1pb8i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hpof57bix"/><path class="z5o5m7b-a"/><path class="o2j0bab4m"/><path class="ch7wwibvg"/><path class="a360h6x4c"/><path class="brbw1pb8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:closed-mailbox-with-lowered-flag"} {...others} />);
}

export default Component;
