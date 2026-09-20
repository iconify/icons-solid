import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdg-0rfov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdg-0rfov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:compact-disc"} {...others} />);
}

export default Component;
