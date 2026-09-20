import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t329eabny.css';
import '../../css/j/jhgf1_bzd.css';
import '../../css/l/lsmxdq7ex.css';
import '../../css/f/f8j6oab4w.css';
import '../../css/j/jmz-nhbxw.css';
import '../../css/r/r-c-ceb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t329eabny"/><path class="jhgf1_bzd"/><path class="lsmxdq7ex"/><path class="f8j6oab4w"/><path class="jmz-nhbxw"/><path class="r-c-ceb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shape-triangle-circle"} {...others} />);
}

export default Component;
