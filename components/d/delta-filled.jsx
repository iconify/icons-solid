import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw_k-4pjf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hw_k-4pjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:delta-filled"} {...others} />);
}

export default Component;
