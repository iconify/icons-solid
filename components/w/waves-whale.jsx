import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmoag8dta.css';
import '../../css/u/uyqlyjidv.css';
import '../../css/g/g6i-4jbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bmoag8dta"/><path class="uyqlyjidv"/><path class="g6i-4jbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:waves-whale"} {...others} />);
}

export default Component;
