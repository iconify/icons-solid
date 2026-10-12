import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7e7mwbuu.css';
import '../../css/r/ru6ak1lfz.css';
import '../../css/b/bfram0b5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u7e7mwbuu"/><path class="ru6ak1lfz"/><path class="bfram0b5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warning-circle"} {...others} />);
}

export default Component;
