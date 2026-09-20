import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yonodp2-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yonodp2-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:ui-step-indicator-2"} {...others} />);
}

export default Component;
