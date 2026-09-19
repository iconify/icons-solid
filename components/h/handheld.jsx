import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmvk8nhzs.css';
import '../../css/t/tza-ysb2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmvk8nhzs"/><path class="tza-ysb2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:handheld"} {...others} />);
}

export default Component;
