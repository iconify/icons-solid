import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yudl5ebcs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yudl5ebcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:robot-16-solid"} {...others} />);
}

export default Component;
