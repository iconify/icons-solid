import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf1q-gaub.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bf1q-gaub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-left-outline"} {...others} />);
}

export default Component;
