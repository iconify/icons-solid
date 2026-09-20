import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i55gowbhu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="i55gowbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-search"} {...others} />);
}

export default Component;
