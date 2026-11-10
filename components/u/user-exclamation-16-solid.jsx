import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8286fbmk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="w8286fbmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:user-exclamation-16-solid"} {...others} />);
}

export default Component;
