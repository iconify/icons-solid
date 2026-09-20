import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe0m34kxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pe0m34kxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plain-3-outline"} {...others} />);
}

export default Component;
