import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eh5atab4m.css';
import '../../css/v/v_185udkc.css';
import '../../css/q/qumx1m0aw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eh5atab4m"/><rect transform="rotate(90 22.28 14.9)" class="v_185udkc"/><path class="qumx1m0aw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hard-hat"} {...others} />);
}

export default Component;
