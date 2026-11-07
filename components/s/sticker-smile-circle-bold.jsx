import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezqx6dokg.css';
import '../../css/k/kmymo-b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ezqx6dokg"/><path clip-rule="evenodd" class="kmymo-b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-circle-bold"} {...others} />);
}

export default Component;
