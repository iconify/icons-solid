import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcwyqgoyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vcwyqgoyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-up-right-solid"} {...others} />);
}

export default Component;
