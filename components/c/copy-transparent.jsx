import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j66vk4b0q.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j66vk4b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:copy-transparent"} {...others} />);
}

export default Component;
