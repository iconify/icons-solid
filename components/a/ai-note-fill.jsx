import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_j62hbkk.css';
import '../../css/o/ovv75xbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_j62hbkk"/><path clip-rule="evenodd" class="ovv75xbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-note-fill"} {...others} />);
}

export default Component;
