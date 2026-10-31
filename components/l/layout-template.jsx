import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/neal2n4_m.css';
import '../../css/o/oltwzvb9y.css';
import '../../css/c/c_w8saclo.css';
import '../../css/t/txj5lrrof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="neal2n4_m"/><path class="oltwzvb9y wm-shine"/><path class="c_w8saclo wm-k"/><path class="txj5lrrof wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:layout-template"} {...others} />);
}

export default Component;
