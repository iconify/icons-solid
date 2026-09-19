import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc7t5-bzd.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="lc7t5-bzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:wheelchair"} {...others} />);
}

export default Component;
