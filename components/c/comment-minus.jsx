import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqgq8bbqo.css';
import '../../css/k/kys9qibdi.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="pqgq8bbqo"/><path class="kys9qibdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:comment-minus"} {...others} />);
}

export default Component;
