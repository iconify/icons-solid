import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg40_p8ml.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kg40_p8ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:cloud-upload"} {...others} />);
}

export default Component;
