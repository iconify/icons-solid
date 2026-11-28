import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcfv2bbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcfv2bbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:line-dashed-solid"} {...others} />);
}

export default Component;
