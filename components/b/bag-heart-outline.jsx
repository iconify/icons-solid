import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1mpvmb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y1mpvmb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-heart-outline"} {...others} />);
}

export default Component;
