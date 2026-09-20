import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_un217oy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_un217oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:money-dollar-circle-line"} {...others} />);
}

export default Component;
