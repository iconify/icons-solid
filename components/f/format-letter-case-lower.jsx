import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_u6k5bzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_u6k5bzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-letter-case-lower"} {...others} />);
}

export default Component;
