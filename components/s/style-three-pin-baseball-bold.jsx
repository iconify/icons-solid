import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obu_zh1ok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="obu_zh1ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:style-three-pin-baseball-bold"} {...others} />);
}

export default Component;
