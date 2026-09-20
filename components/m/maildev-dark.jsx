import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riq_j0vdh.css';
import '../../css/j/jutyogb6q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="riq_j0vdh"/><path class="jutyogb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:maildev-dark"} {...others} />);
}

export default Component;
