import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlmlrhbpp.css';
import '../../css/c/cyronpb3t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zlmlrhbpp"/><path class="cyronpb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charity-48-bold"} {...others} />);
}

export default Component;
