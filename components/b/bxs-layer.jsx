import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zumhdobvu.css';
import '../../css/s/s26e84bqs.css';
import '../../css/x/xy5o6cs4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zumhdobvu"/><path class="s26e84bqs"/><path class="xy5o6cs4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-layer"} {...others} />);
}

export default Component;
