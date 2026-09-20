import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbj0pbvta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zbj0pbvta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clubs-fill"} {...others} />);
}

export default Component;
