import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa1ikb5de.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xa1ikb5de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ethernet-port-bold"} {...others} />);
}

export default Component;
