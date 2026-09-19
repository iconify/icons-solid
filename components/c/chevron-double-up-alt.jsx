import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr1eulbdl.css';
import '../../css/z/z6nvbo_3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jr1eulbdl"/><path class="z6nvbo_3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chevron-double-up-alt"} {...others} />);
}

export default Component;
