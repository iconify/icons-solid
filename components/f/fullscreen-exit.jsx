import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5edn-b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5edn-b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:fullscreen-exit"} {...others} />);
}

export default Component;
