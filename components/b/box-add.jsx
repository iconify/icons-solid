import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usj20usnf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="usj20usnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:box-add"} {...others} />);
}

export default Component;
