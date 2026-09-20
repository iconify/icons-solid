import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx8vpfx_n.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="cx8vpfx_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tooltip-above-text"} {...others} />);
}

export default Component;
