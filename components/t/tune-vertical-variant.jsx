import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4fzgdc_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4fzgdc_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tune-vertical-variant"} {...others} />);
}

export default Component;
