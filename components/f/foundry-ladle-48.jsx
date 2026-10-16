import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy0hggooi.css';
import '../../css/h/hi--g1d6e.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yy0hggooi"/><path class="hi--g1d6e"/><path class="c65-ehvfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:foundry-ladle-48"} {...others} />);
}

export default Component;
