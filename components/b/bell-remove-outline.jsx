import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byn1rl6tp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="byn1rl6tp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bell-remove-outline"} {...others} />);
}

export default Component;
