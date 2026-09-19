import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md3g2pqyo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="md3g2pqyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:girl-flushed"} {...others} />);
}

export default Component;
