import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1yhvpbks.css';
import '../../css/w/w6uhcybse.css';
import '../../css/j/j8okfubos.css';
import '../../css/r/rld3ezbqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t1yhvpbks"/><path class="w6uhcybse"/><path class="j8okfubos"/><path class="rld3ezbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-history"} {...others} />);
}

export default Component;
