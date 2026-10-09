import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lre1b2w1l.css';
import '../../css/b/b7wt3uvay.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lre1b2w1l"/><path class="b7wt3uvay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:messages-48"} {...others} />);
}

export default Component;
