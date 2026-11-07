import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb03qvb5t.css';
import '../../css/d/d-uqe5b9k.css';
import '../../css/e/exclbqmqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eb03qvb5t"/><path clip-rule="evenodd" class="d-uqe5b9k"/><path class="exclbqmqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:webcam-off-outline"} {...others} />);
}

export default Component;
