import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke89ayr1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke89ayr1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:bars-solid"} {...others} />);
}

export default Component;
