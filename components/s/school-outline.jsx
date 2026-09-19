import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s12qakbkj.css';
import '../../css/q/q6hvgntet.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s12qakbkj"/><path class="q6hvgntet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:school-outline"} {...others} />);
}

export default Component;
