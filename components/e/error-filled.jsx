import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpl9-m38e.css';
import '../../css/w/wrto5cmdt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kpl9-m38e"/><path class="wrto5cmdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:error-filled"} {...others} />);
}

export default Component;
