import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53j2rtlh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s53j2rtlh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:power-cord"} {...others} />);
}

export default Component;
