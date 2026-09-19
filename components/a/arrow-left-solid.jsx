import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg_hf-5gc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mg_hf-5gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-left-solid"} {...others} />);
}

export default Component;
