import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj8ilnbfl.css';
import '../../css/i/i7ws4lb4n.css';
import '../../css/c/cn0l77biu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nj8ilnbfl"/><path class="i7ws4lb4n"/><path class="cn0l77biu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:worm-gear-48"} {...others} />);
}

export default Component;
