import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9fzepbyk.css';
import '../../css/g/g1_xiglcm.css';
import '../../css/a/a6k7bkb_m.css';
import '../../css/v/v2ww57mqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b9fzepbyk"/><path class="g1_xiglcm"/><path class="a6k7bkb_m"/><path class="v2ww57mqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:iris-scan-target"} {...others} />);
}

export default Component;
