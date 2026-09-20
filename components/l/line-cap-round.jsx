import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2nfunb6z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l2nfunb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:line-cap-round"} {...others} />);
}

export default Component;
