import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zry5a9qkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zry5a9qkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:folder-minus-solid"} {...others} />);
}

export default Component;
