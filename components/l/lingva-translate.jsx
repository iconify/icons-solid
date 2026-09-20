import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdqeqcb-j.css';
import '../../css/v/v61rn0vbp.css';
import '../../css/p/pk7vzlmko.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kdqeqcb-j"/><path class="v61rn0vbp"/><path class="pk7vzlmko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lingva-translate"} {...others} />);
}

export default Component;
