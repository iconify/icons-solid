import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbhx33-fu.css';
import '../../css/i/iy9nx5bhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbhx33-fu"/><path class="iy9nx5bhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-coaching-idea-jigsaw"} {...others} />);
}

export default Component;
