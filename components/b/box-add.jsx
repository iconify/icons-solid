import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/az8dcqgmq.css';
import '../../css/g/gcwqm4-4k.css';
import '../../css/x/xgtgfnecr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="az8dcqgmq"/><path class="gcwqm4-4k"/><path class="xgtgfnecr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:box-add"} {...others} />);
}

export default Component;
