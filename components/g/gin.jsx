import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw_tv4bka.css';
import '../../css/m/md286fbip.css';
import '../../css/a/abebsob6w.css';
import '../../css/t/tx-y2qaja.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="jw_tv4bka"/><g class="md286fbip"><path class="abebsob6w"/><path class="tx-y2qaja"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:gin"} {...others} />);
}

export default Component;
