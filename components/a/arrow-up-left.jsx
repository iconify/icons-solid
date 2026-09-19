import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms-oo7b_h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ms-oo7b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrow-up-left"} {...others} />);
}

export default Component;
