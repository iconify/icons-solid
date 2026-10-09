import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij6cj4rwy.css';
import '../../css/u/ubti_-buk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ij6cj4rwy"/><path class="ubti_-buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:baby-48-bold"} {...others} />);
}

export default Component;
