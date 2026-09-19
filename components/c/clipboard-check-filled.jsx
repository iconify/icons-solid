import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3q756b1j.css';
import '../../css/d/d4usi8bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3q756b1j"/><path class="d4usi8bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:clipboard-check-filled"} {...others} />);
}

export default Component;
