import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlw3_ib-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mlw3_ib-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:headset-solid"} {...others} />);
}

export default Component;
