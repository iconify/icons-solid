import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5_j0fbgb.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="g5_j0fbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-up-box-fill-12"} {...others} />);
}

export default Component;
