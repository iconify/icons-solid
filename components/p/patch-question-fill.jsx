import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc9ngvbus.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bc9ngvbus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:patch-question-fill"} {...others} />);
}

export default Component;
