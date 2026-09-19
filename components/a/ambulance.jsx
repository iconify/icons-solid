import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7k8_obbw.css';
import '../../css/f/fdldjxbvf.css';
import '../../css/x/xnnlqrb3a.css';
import '../../css/e/efn9hv69t.css';
import '../../css/n/nn86kkb7q.css';
import '../../css/m/mkqd_acbi.css';
import '../../css/u/u_9wklibx.css';
import '../../css/w/w-axr9beb.css';
import '../../css/j/j810hpbkv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z7k8_obbw"/><path class="fdldjxbvf"/><path class="xnnlqrb3a"/><path class="efn9hv69t"/><path class="nn86kkb7q"/><path class="mkqd_acbi"/><path class="u_9wklibx"/><path class="w-axr9beb"/><path class="j810hpbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ambulance"} {...others} />);
}

export default Component;
