import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/encu70b2r.css';
import '../../css/p/pkhtqxbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="encu70b2r"/><path clip-rule="evenodd" class="pkhtqxbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-medicine-bold"} {...others} />);
}

export default Component;
