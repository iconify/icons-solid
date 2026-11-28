import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwlu0cchv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwlu0cchv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:wallet-lock"} {...others} />);
}

export default Component;
