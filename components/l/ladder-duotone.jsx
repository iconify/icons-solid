import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqtnr_bby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary vqtnr_bby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ladder-duotone"} {...others} />);
}

export default Component;
