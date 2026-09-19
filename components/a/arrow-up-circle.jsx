import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tny2aw3uc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tny2aw3uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-up-circle"} {...others} />);
}

export default Component;
