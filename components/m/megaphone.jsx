import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxkvsmhic.css';
import '../../css/n/nklgvxi4m.css';
import '../../css/n/n91aw11bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jxkvsmhic"/><path class="nklgvxi4m"/><path class="n91aw11bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:megaphone"} {...others} />);
}

export default Component;
