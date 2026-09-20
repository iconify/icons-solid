import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei6qdubbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ei6qdubbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:chromium-bold"} {...others} />);
}

export default Component;
