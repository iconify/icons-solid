import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsoqsbc0b.css';
import '../../css/l/lnu--6bbg.css';
import '../../css/k/k8u3_jxow.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fsoqsbc0b"/><path class="lnu--6bbg"/><path class="k8u3_jxow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kibana"} {...others} />);
}

export default Component;
