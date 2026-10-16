import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3hnj1bgs.css';
import '../../css/n/ng_3h1b8q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g3hnj1bgs"/><path class="ng_3h1b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-tee-48"} {...others} />);
}

export default Component;
