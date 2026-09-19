import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj0ye9czm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cj0ye9czm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:remove-from-cart"} {...others} />);
}

export default Component;
