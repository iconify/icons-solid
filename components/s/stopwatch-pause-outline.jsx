import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7lkx0ogu.css';
import '../../css/y/yzk23xbkf.css';
import '../../css/x/xq5yyvbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h7lkx0ogu"/><path class="yzk23xbkf"/><path class="xq5yyvbkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-pause-outline"} {...others} />);
}

export default Component;
