import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvvpbts5o.css';
import '../../css/t/txrxn8dlv.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="cvvpbts5o"/><path class="txrxn8dlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:nixos-wordmark"} {...others} />);
}

export default Component;
