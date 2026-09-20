import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb2ks_b1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zb2ks_b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:writing-sign"} {...others} />);
}

export default Component;
