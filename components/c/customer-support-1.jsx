import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cgrq_9bsc.css';
import '../../css/f/f5ws3ab9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cgrq_9bsc"/><path class="f5ws3ab9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:customer-support-1"} {...others} />);
}

export default Component;
