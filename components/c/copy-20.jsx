import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjt2vnb6p.css';
import '../../css/a/axzye1lxy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pjt2vnb6p"/><path class="axzye1lxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:copy-20"} {...others} />);
}

export default Component;
