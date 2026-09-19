import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2_k3ejup.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="h2_k3ejup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:zoom-out"} {...others} />);
}

export default Component;
