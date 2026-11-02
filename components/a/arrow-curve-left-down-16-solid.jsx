import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/til_8xb0g.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="til_8xb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-curve-left-down-16-solid"} {...others} />);
}

export default Component;
