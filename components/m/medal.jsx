import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfs19bcvf.css';
import '../../css/a/an4c_3b3j.css';
import '../../css/y/yjo7ewdyq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="xfs19bcvf"/><path class="an4c_3b3j"/><path class="yjo7ewdyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:medal"} {...others} />);
}

export default Component;
