import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbw2ks26y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cbw2ks26y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-to-down-right-broken"} {...others} />);
}

export default Component;
