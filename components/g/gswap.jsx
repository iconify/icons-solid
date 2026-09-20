import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfp-e_b9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfp-e_b9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gswap"} {...others} />);
}

export default Component;
