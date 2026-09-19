import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3bwd3b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t3bwd3b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:package-filled"} {...others} />);
}

export default Component;
