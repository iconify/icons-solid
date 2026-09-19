import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq0wx8bxg.css';
import '../../css/s/sczabacxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq0wx8bxg"/><path class="sczabacxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:wallet"} {...others} />);
}

export default Component;
