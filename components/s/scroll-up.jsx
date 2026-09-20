import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qth9flppj.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qth9flppj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:scroll-up"} {...others} />);
}

export default Component;
