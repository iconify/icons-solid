import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja6d-8b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ja6d-8b0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:letter-spacing-alt-filled"} {...others} />);
}

export default Component;
