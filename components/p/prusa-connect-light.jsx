import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btj23f13n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="btj23f13n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:prusa-connect-light"} {...others} />);
}

export default Component;
