import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0c0eu8vo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0c0eu8vo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pipe-wrench"} {...others} />);
}

export default Component;
