import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1ct7n8ui.css';
import '../../css/d/dj56zmboa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1ct7n8ui"/><path clip-rule="evenodd" class="dj56zmboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dxgm"} {...others} />);
}

export default Component;
