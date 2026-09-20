import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/g5pb60rja.css';
import '../../css/u/u7db4chhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="g5pb60rja"/><path class="u7db4chhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-building-tall-2"} {...others} />);
}

export default Component;
