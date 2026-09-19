import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9qhx1bfi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r9qhx1bfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:conical-flask"} {...others} />);
}

export default Component;
