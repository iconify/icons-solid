import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evqb2ybga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evqb2ybga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:signal-2g"} {...others} />);
}

export default Component;
