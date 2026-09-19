import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhfy53brp.css';
import '../../css/m/md286fbip.css';
import '../../css/b/b9lrwlcxy.css';
import '../../css/d/d5816f8fq.css';
import '../../css/v/v11pue_sk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="xhfy53brp"/><g class="md286fbip"><path class="b9lrwlcxy"/><path class="d5816f8fq"/><path class="v11pue_sk"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ser"} {...others} />);
}

export default Component;
