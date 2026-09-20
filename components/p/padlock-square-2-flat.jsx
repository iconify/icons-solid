import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0ppu1btw.css';
import '../../css/p/pqe-l4qnj.css';
import '../../css/i/iaaj4xbkh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h0ppu1btw"/><path class="pqe-l4qnj"/><path class="iaaj4xbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:padlock-square-2-flat"} {...others} />);
}

export default Component;
