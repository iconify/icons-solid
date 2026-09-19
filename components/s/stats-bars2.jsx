import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7qhb_-hh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g7qhb_-hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:stats-bars2"} {...others} />);
}

export default Component;
