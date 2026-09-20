import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suo4c_bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="suo4c_bzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:add-folder-bold"} {...others} />);
}

export default Component;
