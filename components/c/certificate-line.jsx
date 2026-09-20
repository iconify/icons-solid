import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc_bc1-ni.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mc_bc1-ni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:certificate-line"} {...others} />);
}

export default Component;
