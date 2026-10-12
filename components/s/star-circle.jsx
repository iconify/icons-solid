import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afenncfgc.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/j/jkp03ac7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="afenncfgc"/><circle transform="rotate(90 12 12)" class="mpf1g8bav"/><path class="jkp03ac7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:star-circle"} {...others} />);
}

export default Component;
