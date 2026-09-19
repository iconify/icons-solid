import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khtj5p3er.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="khtj5p3er"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-right-alt-filled"} {...others} />);
}

export default Component;
