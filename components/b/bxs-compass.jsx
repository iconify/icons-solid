import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miazw5f2j.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="miazw5f2j"/><circle class="n1xy6nh9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-compass"} {...others} />);
}

export default Component;
