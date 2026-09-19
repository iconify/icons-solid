import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8h6fkdvo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p8h6fkdvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:minus-16-solid"} {...others} />);
}

export default Component;
