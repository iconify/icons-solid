import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fclsd1b_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fclsd1b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:radio-button-indeterminate"} {...others} />);
}

export default Component;
