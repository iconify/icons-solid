import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m17loqb1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m17loqb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:noteblock-text-line"} {...others} />);
}

export default Component;
