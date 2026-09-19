import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxg60abnf.css';
import '../../css/o/oajkybcsc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sxg60abnf"/><path class="oajkybcsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:mod"} {...others} />);
}

export default Component;
