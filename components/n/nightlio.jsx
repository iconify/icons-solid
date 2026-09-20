import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw5h94i8m.css';
import '../../css/i/ingurx9qd.css';
import '../../css/u/u2ff1xk4j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tw5h94i8m"/><path class="ingurx9qd"/><path class="u2ff1xk4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nightlio"} {...others} />);
}

export default Component;
