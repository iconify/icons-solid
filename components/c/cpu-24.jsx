import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2cwfz8jg.css';
import '../../css/s/s5kpojbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2cwfz8jg"/><path class="s5kpojbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:cpu-24"} {...others} />);
}

export default Component;
