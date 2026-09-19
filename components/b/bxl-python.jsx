import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcn2r4bsf.css';
import '../../css/k/kvlndpbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcn2r4bsf"/><path class="kvlndpbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-python"} {...others} />);
}

export default Component;
