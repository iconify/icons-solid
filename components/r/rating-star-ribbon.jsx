import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy70bbc3m.css';
import '../../css/j/j582q-bqu.css';
import '../../css/b/bbfs67b9v.css';
import '../../css/i/ibub91_uh.css';
import '../../css/l/lkoqgccxr.css';
import '../../css/w/wdtt0vbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dy70bbc3m"/><path class="j582q-bqu"/><path class="bbfs67b9v"/><path class="ibub91_uh"/><path class="lkoqgccxr"/><path class="wdtt0vbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:rating-star-ribbon"} {...others} />);
}

export default Component;
