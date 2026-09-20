import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk39dzjib.css';
import '../../css/z/z1ayc1bqn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nk39dzjib"/><path clip-rule="evenodd" class="z1ayc1bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:midi-2-16"} {...others} />);
}

export default Component;
