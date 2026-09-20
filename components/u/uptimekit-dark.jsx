import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy6o-6bwq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qy6o-6bwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptimekit-dark"} {...others} />);
}

export default Component;
