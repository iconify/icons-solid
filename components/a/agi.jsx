import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/van_2nbky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="van_2nbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:agi"} {...others} />);
}

export default Component;
