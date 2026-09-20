import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvn9to28b.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="kvn9to28b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:coin-silver"} {...others} />);
}

export default Component;
