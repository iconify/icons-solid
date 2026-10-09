import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmp2mfr9i.css';
import '../../css/n/nsiiab0ne.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zmp2mfr9i"/><path class="nsiiab0ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:relay-48"} {...others} />);
}

export default Component;
