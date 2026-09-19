import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al-qozjuu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="al-qozjuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:generic-sorting-asc"} {...others} />);
}

export default Component;
