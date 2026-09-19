import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3qfxppay.css';
import '../../css/l/l5yoditpm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3qfxppay"/><circle class="l5yoditpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:disc"} {...others} />);
}

export default Component;
