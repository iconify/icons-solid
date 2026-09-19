import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll6-iwbcg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ll6-iwbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:viewfinder-circle-20-solid"} {...others} />);
}

export default Component;
