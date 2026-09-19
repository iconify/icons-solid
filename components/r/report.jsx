import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wwxxnu_vl.css';
import '../../css/x/xswrwubyq.css';
import '../../css/f/fwt8thbhp.css';
import '../../css/t/t58o8zbmj.css';
import '../../css/c/co11yjizw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="wwxxnu_vl"/><path class="xswrwubyq"/><path class="fwt8thbhp"/><path class="t58o8zbmj"/><path class="co11yjizw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:report"} {...others} />);
}

export default Component;
