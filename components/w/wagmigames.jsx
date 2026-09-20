import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3-5_c46r.css';
import '../../css/f/fgtzzk1mv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l3-5_c46r"/><path class="fgtzzk1mv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wagmigames"} {...others} />);
}

export default Component;
