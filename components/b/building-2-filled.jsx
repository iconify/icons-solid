import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgjm7j-sy.css';
import '../../css/v/vi5e0ubjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgjm7j-sy"/><path class="vi5e0ubjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-2-filled"} {...others} />);
}

export default Component;
