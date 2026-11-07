import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c55umkfci.css';
import '../../css/n/nfvqnvzcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c55umkfci"/><path clip-rule="evenodd" class="nfvqnvzcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-3-outline"} {...others} />);
}

export default Component;
