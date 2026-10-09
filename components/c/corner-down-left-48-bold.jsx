import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7kb9t1gf.css';
import '../../css/f/fj-2afnlk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7kb9t1gf"/><path class="fj-2afnlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-down-left-48-bold"} {...others} />);
}

export default Component;
