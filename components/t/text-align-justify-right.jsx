import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhdnz2bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dhdnz2bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-align-justify-right"} {...others} />);
}

export default Component;
