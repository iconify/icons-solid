import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxbvi_4ka.css';
import '../../css/z/z2pque0vh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxbvi_4ka"/><path class="z2pque0vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:package-outlined"} {...others} />);
}

export default Component;
