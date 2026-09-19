import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k58n_0uxa.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="k58n_0uxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-small-right-20-solid"} {...others} />);
}

export default Component;
