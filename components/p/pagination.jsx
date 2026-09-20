import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk0u-ybaf.css';
import '../../css/x/xekl2mwvy.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="pk0u-ybaf"/><path class="xekl2mwvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:pagination"} {...others} />);
}

export default Component;
