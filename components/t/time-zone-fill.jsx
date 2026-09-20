import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zja1g2tpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zja1g2tpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:time-zone-fill"} {...others} />);
}

export default Component;
