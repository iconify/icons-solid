import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/y/yvrb520ji.css';
import '../../css/m/miwweccgx.css';
import '../../css/z/zxp7120aw.css';
import '../../css/i/i6rq8mbmn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="yvrb520ji"/><path class="miwweccgx"/><path class="zxp7120aw"/><path class="i6rq8mbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:spinning-top"} {...others} />);
}

export default Component;
