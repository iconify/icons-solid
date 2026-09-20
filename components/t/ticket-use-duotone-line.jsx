import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwb0gcbpy.css';
import '../../css/o/o02y6724p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwb0gcbpy"/><path class="o02y6724p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ticket-use-duotone-line"} {...others} />);
}

export default Component;
