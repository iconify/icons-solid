import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8yyz4_qr.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="k8yyz4_qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:link-chain-flat"} {...others} />);
}

export default Component;
