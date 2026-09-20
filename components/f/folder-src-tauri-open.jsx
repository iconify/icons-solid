import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh4423hht.css';
import '../../css/h/hezb7ebtf.css';
import '../../css/p/pdjh1hb7i.css';
import '../../css/p/p8n1gxb1t.css';
import '../../css/m/mw7rs_yrs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zh4423hht"/><path class="hezb7ebtf"/><path class="pdjh1hb7i"/><path clip-rule="evenodd" class="p8n1gxb1t"/><path clip-rule="evenodd" class="mw7rs_yrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-src-tauri-open"} {...others} />);
}

export default Component;
