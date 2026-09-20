import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d874l2bcu.css';
import '../../css/n/ngc99bfxg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d874l2bcu"/><path class="ngc99bfxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hister-dark"} {...others} />);
}

export default Component;
