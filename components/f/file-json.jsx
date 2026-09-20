import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq4y0sbex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vq4y0sbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-json"} {...others} />);
}

export default Component;
