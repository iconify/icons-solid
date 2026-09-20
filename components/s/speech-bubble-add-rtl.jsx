import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1kz4tlbg.css';
import '../../css/d/d-svt8bha.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g1kz4tlbg"/><path class="d-svt8bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:speech-bubble-add-rtl"} {...others} />);
}

export default Component;
