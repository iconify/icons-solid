import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry2mczbpi.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b ry2mczbpi"/><path class="b bwibdw4bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pencil-circle"} {...others} />);
}

export default Component;
