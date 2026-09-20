import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx5-cytsq.css';
import '../../css/f/fp4ye0bdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xx5-cytsq"/><path class="fp4ye0bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:certificate-2-fill"} {...others} />);
}

export default Component;
