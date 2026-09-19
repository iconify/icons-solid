import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v019dkbhl.css';
import '../../css/b/bdk4lrbrq.css';
import '../../css/g/gz-_93bch.css';
import '../../css/w/wgk3vp1fl.css';
import '../../css/e/e1l6ajbjq.css';
import '../../css/c/cwkghccfp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="v019dkbhl"/><path class="bdk4lrbrq"/><path class="gz-_93bch"/><path class="wgk3vp1fl"/><path class="e1l6ajbjq"/><path class="cwkghccfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:party-popper"} {...others} />);
}

export default Component;
