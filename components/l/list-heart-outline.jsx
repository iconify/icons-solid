import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/danvxv9gy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="danvxv9gy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-heart-outline"} {...others} />);
}

export default Component;
