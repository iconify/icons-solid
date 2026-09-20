import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6bo0obgu.css';
import '../../css/e/enr0-n4yg.css';
import '../../css/i/ilakebzby.css';
import '../../css/u/u8d1k9b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6bo0obgu"/><path class="enr0-n4yg"/><path class="ilakebzby"/><path class="u8d1k9b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pkf"} {...others} />);
}

export default Component;
