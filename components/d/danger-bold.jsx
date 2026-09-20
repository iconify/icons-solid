import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfvb44b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nfvb44b5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-bold"} {...others} />);
}

export default Component;
