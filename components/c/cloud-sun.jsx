import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls0nprbji.css';
import '../../css/u/uo-66kwym.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="ls0nprbji"/><path clip-rule="evenodd" class="uo-66kwym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cloud-sun"} {...others} />);
}

export default Component;
