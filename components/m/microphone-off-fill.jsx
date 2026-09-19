import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-bb-ol-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z-bb-ol-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:microphone-off-fill"} {...others} />);
}

export default Component;
