import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2agh85ja.css';
import '../../css/l/l0ifl0rlq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d2agh85ja"/><path class="l0ifl0rlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:convoy-light"} {...others} />);
}

export default Component;
