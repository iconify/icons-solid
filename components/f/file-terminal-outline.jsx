import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5c3_9bws.css';
import '../../css/t/twtz-lrju.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v5c3_9bws"/><path class="twtz-lrju"/><path clip-rule="evenodd" class="d25mwn3tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-terminal-outline"} {...others} />);
}

export default Component;
