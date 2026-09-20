import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/evpekyz3z.css';
import '../../css/j/jh1pe0bqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="evpekyz3z"/><path class="jh1pe0bqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:upload-duotone"} {...others} />);
}

export default Component;
