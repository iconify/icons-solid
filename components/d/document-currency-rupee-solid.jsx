import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr1y3kbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pr1y3kbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-currency-rupee-solid"} {...others} />);
}

export default Component;
