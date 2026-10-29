import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh_qq7i6m.css';
import '../../css/s/sfehr1btw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh_qq7i6m wm-k"/><path class="sfehr1btw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pound-sterling"} {...others} />);
}

export default Component;
