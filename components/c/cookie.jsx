import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwhpnrv1q.css';

const viewBox = {"width":432,"height":472};
const content = `<path class="iwhpnrv1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:cookie"} {...others} />);
}

export default Component;
