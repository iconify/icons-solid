import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ieasjfbcb.css';
import '../../css/d/d4shuvlgi.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ieasjfbcb"/><path class="d4shuvlgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pocket-casts"} {...others} />);
}

export default Component;
