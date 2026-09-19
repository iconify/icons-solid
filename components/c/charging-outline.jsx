import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo56a125d.css';
import '../../css/j/je4d_rxfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fo56a125d"/><path class="je4d_rxfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:charging-outline"} {...others} />);
}

export default Component;
