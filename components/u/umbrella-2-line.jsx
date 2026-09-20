import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdanj7bcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdanj7bcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:umbrella-2-line"} {...others} />);
}

export default Component;
