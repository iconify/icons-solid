import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh9q0kbuy.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sh9q0kbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:branch"} {...others} />);
}

export default Component;
