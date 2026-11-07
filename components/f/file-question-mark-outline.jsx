import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4xmzwl1u.css';
import '../../css/x/x5se19b3w.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4xmzwl1u"/><path class="x5se19b3w"/><path clip-rule="evenodd" class="d25mwn3tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-question-mark-outline"} {...others} />);
}

export default Component;
