import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exkh_2n1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exkh_2n1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fire-truck-solid"} {...others} />);
}

export default Component;
