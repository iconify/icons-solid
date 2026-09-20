import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9-rlac8p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9-rlac8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:notebook-love-outline"} {...others} />);
}

export default Component;
