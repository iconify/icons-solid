import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkwc33ays.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gkwc33ays"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:arrow-down-right2"} {...others} />);
}

export default Component;
