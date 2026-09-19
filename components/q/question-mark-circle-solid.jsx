import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig7-kti0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ig7-kti0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:question-mark-circle-solid"} {...others} />);
}

export default Component;
