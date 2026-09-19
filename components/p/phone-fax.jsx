import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yhob_-lpw.css';
import '../../css/c/cx8pjrbkk.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="yhob_-lpw"/><path class="cx8pjrbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:phone-fax"} {...others} />);
}

export default Component;
