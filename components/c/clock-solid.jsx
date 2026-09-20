import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjvvb2byx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjvvb2byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:clock-solid"} {...others} />);
}

export default Component;
