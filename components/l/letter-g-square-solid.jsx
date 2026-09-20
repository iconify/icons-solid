import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsh1hrhbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsh1hrhbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-g-square-solid"} {...others} />);
}

export default Component;
