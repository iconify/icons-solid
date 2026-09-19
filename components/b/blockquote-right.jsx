import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cklih1mfp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cklih1mfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:blockquote-right"} {...others} />);
}

export default Component;
