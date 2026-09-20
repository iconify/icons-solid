import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glvt67bak.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="glvt67bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:bitcoin-circle"} {...others} />);
}

export default Component;
