import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/raz1blbfp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="raz1blbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:grid-3x2-gap"} {...others} />);
}

export default Component;
