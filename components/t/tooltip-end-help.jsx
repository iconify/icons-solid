import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb3m0hb2p.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="tb3m0hb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tooltip-end-help"} {...others} />);
}

export default Component;
