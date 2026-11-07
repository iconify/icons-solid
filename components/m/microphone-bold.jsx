import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si6y8idcw.css';
import '../../css/w/w8iuawbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="si6y8idcw"/><path clip-rule="evenodd" class="w8iuawbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-bold"} {...others} />);
}

export default Component;
