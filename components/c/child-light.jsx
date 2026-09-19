import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njsgzcc0r.css';
import '../../css/l/lkugdybit.css';
import '../../css/e/ew6j5etob.css';
import '../../css/j/jb_udgldo.css';
import '../../css/b/b1xaj94jr.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/c/cdcjgwj5q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="njsgzcc0r"/><path class="lkugdybit"/><path class="ew6j5etob"/><path class="jb_udgldo"/><path class="b1xaj94jr"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="cdcjgwj5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:child-light"} {...others} />);
}

export default Component;
