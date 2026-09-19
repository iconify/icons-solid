import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6d7zo6uz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s6d7zo6uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:hdd-fill"} {...others} />);
}

export default Component;
