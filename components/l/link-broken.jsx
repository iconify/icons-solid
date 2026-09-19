import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux94p3bkn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ux94p3bkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:link-broken"} {...others} />);
}

export default Component;
