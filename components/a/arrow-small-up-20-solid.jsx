import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_goi9h2x.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="k_goi9h2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-small-up-20-solid"} {...others} />);
}

export default Component;
