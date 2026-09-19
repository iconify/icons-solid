import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3wh155go.css';
import '../../css/i/i_8ytb8-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3wh155go"/><path clip-rule="evenodd" class="i_8ytb8-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:zoom-out-outline"} {...others} />);
}

export default Component;
