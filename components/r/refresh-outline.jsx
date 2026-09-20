import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoo2owbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hoo2owbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-outline"} {...others} />);
}

export default Component;
