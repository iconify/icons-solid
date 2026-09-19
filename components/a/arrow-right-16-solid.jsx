import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbc0g8wzy.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="cbc0g8wzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-right-16-solid"} {...others} />);
}

export default Component;
