import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyp4fxbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dyp4fxbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flask-round-filled"} {...others} />);
}

export default Component;
