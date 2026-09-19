import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h13_4k34x.css';
import '../../css/z/zueg8mcbn.css';
import '../../css/p/pycadzb5a.css';
import '../../css/w/wyc-nlb8i.css';
import '../../css/p/pmwrx-xfl.css';
import '../../css/f/f8qnwnalo.css';
import '../../css/e/eod6hezse.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h13_4k34x"/><path class="zueg8mcbn"/><path class="pycadzb5a"/><path class="wyc-nlb8i"/><path class="pmwrx-xfl"/><path class="f8qnwnalo"/><path class="eod6hezse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:list-alphabet"} {...others} />);
}

export default Component;
