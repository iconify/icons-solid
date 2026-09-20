import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqx6hhwyx.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="sqx6hhwyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:coin-electrum"} {...others} />);
}

export default Component;
