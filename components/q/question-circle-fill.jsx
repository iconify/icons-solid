import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2_f5cb3k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k2_f5cb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:question-circle-fill"} {...others} />);
}

export default Component;
