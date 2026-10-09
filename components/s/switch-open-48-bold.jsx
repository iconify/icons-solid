import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o246vub3p.css';
import '../../css/c/cce0_8bwo.css';
import '../../css/z/zslb9qq5n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o246vub3p"/><path class="cce0_8bwo"/><path class="zslb9qq5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switch-open-48-bold"} {...others} />);
}

export default Component;
