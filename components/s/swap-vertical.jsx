import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3-0u0_2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3-0u0_2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:swap-vertical"} {...others} />);
}

export default Component;
