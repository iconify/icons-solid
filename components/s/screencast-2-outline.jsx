import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5qai0b8i.css';
import '../../css/z/zpnr2hbce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q5qai0b8i"/><path clip-rule="evenodd" class="zpnr2hbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-2-outline"} {...others} />);
}

export default Component;
