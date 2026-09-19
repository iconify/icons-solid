import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4kc8vb4f.css';
import '../../css/i/ii8qtwyrs.css';
import '../../css/o/on4fre1ek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4kc8vb4f"/><path class="ii8qtwyrs"/><circle class="on4fre1ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:software-outlined"} {...others} />);
}

export default Component;
