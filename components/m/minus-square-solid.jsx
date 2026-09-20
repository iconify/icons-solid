import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyvg-6-bh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyvg-6-bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:minus-square-solid"} {...others} />);
}

export default Component;
