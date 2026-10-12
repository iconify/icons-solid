import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjf9bubqw.css';
import '../../css/v/vvi2seh-x.css';
import '../../css/m/muuu4qbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12.07 8.32)" class="jjf9bubqw"/><circle transform="rotate(90 12.07 8.32)" class="vvi2seh-x"/><path class="muuu4qbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:radio-tower"} {...others} />);
}

export default Component;
