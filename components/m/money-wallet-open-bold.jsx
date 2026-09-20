import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szpeuiw3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szpeuiw3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:money-wallet-open-bold"} {...others} />);
}

export default Component;
