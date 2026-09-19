import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgx52e-ac.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fgx52e-ac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:brightness-high"} {...others} />);
}

export default Component;
