import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj0yd0xaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wj0yd0xaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:phone-missed-call"} {...others} />);
}

export default Component;
