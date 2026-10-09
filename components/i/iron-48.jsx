import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9h1iuz6i.css';
import '../../css/z/zaaag60jr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k9h1iuz6i"/><path class="zaaag60jr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:iron-48"} {...others} />);
}

export default Component;
