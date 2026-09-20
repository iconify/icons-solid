import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co17elbuu.css';
import '../../css/o/oh7_w2b4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="co17elbuu"/><path class="oh7_w2b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:alert-alarm-bell"} {...others} />);
}

export default Component;
