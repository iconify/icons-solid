import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxlx8t3pw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxlx8t3pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:berlin-tower"} {...others} />);
}

export default Component;
