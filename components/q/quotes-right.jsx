import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4zdoe4-t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x4zdoe4-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:quotes-right"} {...others} />);
}

export default Component;
