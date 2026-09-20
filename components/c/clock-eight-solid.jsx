import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfzc1ffoz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfzc1ffoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:clock-eight-solid"} {...others} />);
}

export default Component;
