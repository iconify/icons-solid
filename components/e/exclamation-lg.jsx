import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flln8sb4m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="flln8sb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:exclamation-lg"} {...others} />);
}

export default Component;
