import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rok2wacqg.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="rok2wacqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bars-3-bottom-right-20-solid"} {...others} />);
}

export default Component;
