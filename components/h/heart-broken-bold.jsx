import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le6bjebxm.css';
import '../../css/c/ct-rsubrf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="le6bjebxm"/><path class="ct-rsubrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-broken-bold"} {...others} />);
}

export default Component;
