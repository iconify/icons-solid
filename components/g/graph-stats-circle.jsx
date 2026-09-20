import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ic6bumz1t.css';
import '../../css/n/nuz9zpbsf.css';
import '../../css/j/jy60lc3rx.css';
import '../../css/i/i-sq6rbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ic6bumz1t"/><path class="nuz9zpbsf"/><path class="jy60lc3rx"/><path class="i-sq6rbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:graph-stats-circle"} {...others} />);
}

export default Component;
