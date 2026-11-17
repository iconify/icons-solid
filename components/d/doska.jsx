import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf78fhlzv.css';
import '../../css/t/tvyzckmsa.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="kf78fhlzv"/><path class="tvyzckmsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:doska"} {...others} />);
}

export default Component;
