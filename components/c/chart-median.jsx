import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk-i_ibgn.css';
import '../../css/y/ykc7uz8oe.css';
import '../../css/z/z17_xq-jk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pk-i_ibgn"/><path class="ykc7uz8oe"/><path class="z17_xq-jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-median"} {...others} />);
}

export default Component;
