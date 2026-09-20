import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg3cztqhx.css';
import '../../css/d/dedjm9gwi.css';
import '../../css/d/d9jjm8sgu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tg3cztqhx"/><path class="dedjm9gwi"/><path class="d9jjm8sgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chorizard"} {...others} />);
}

export default Component;
