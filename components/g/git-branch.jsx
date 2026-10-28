import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bnef_pb8w.css';
import '../../css/j/j5u9w_zfh.css';
import '../../css/w/wh2bzxdhv.css';
import '../../css/s/sz-zgn65k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="bnef_pb8w"/><circle class="j5u9w_zfh"/><circle class="wh2bzxdhv"/><path class="sz-zgn65k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:git-branch"} {...others} />);
}

export default Component;
