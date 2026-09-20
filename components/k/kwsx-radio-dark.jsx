import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rya8k8jhh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rya8k8jhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kwsx-radio-dark"} {...others} />);
}

export default Component;
