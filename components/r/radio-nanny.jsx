import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/h/htj2iz-tx.css';
import '../../css/j/j3ug3mo4b.css';
import '../../css/m/mi2r0hb2l.css';
import '../../css/w/wzh5qtzxl.css';
import '../../css/t/tff-dibrl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="htj2iz-tx"/><circle class="j3ug3mo4b"/><path class="mi2r0hb2l"/><path class="wzh5qtzxl"/><path class="tff-dibrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:radio-nanny"} {...others} />);
}

export default Component;
