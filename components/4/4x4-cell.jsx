import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_uzs2cum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_uzs2cum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:4x4-cell"} {...others} />);
}

export default Component;
