import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytioibbqn.css';
import '../../css/g/gh23w4b3k.css';
import '../../css/g/gq9v8wbif.css';
import '../../css/b/b_aoxvb5n.css';
import '../../css/x/xgao9cc4t.css';
import '../../css/w/wya031mxl.css';
import '../../css/l/l_-y6m2ca.css';
import '../../css/r/rtj5glzpf.css';
import '../../css/u/umd59gtjx.css';
import '../../css/l/ln5bf9t4a.css';
import '../../css/q/qc8xwf6qn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow ytioibbqn"/><path class="gh23w4b3k"/><path class="gq9v8wbif"/><path class="b_aoxvb5n"/><path class="xgao9cc4t"/><path class="wya031mxl"/><path class="l_-y6m2ca"/><path class="rtj5glzpf"/><path class="umd59gtjx"/><path class="ln5bf9t4a wm-shine"/><path class="qc8xwf6qn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:play"} {...others} />);
}

export default Component;
