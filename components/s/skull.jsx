import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5eiw_ngk.css';
import '../../css/e/eax4ngh7x.css';
import '../../css/k/kesmsbc6b.css';
import '../../css/c/c-onrbcpy.css';
import '../../css/u/uakf-czeh.css';
import '../../css/u/uvje1tbxk.css';
import '../../css/o/oaxe0pbuv.css';
import '../../css/v/v-nwltozx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b5eiw_ngk"/><path class="eax4ngh7x"/><path class="kesmsbc6b"/><path class="c-onrbcpy"/><path class="uakf-czeh"/><path class="uvje1tbxk"/><path class="oaxe0pbuv"/><path class="v-nwltozx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:skull"} {...others} />);
}

export default Component;
