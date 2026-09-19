import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlg3zzljz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vlg3zzljz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:arrow-down-right-square-solid"} {...others} />);
}

export default Component;
