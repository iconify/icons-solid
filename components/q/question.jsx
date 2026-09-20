import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlfg3onlw.css';
import '../../css/x/xa153ngzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlfg3onlw"/><circle class="xa153ngzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:question"} {...others} />);
}

export default Component;
