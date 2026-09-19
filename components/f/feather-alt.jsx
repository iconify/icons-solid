import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut_kj5bvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ut_kj5bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:feather-alt"} {...others} />);
}

export default Component;
