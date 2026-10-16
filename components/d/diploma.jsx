import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c26r66vgs.css';
import '../../css/b/blmc29b5u.css';
import '../../css/y/y29isbbma.css';
import '../../css/s/s_uiisrjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c26r66vgs"/><path class="blmc29b5u"/><path class="y29isbbma"/><path class="s_uiisrjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:diploma"} {...others} />);
}

export default Component;
