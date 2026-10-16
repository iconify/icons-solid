import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuc7lobqs.css';
import '../../css/n/nby-j5t1p.css';
import '../../css/a/a0m07idav.css';
import '../../css/l/l9ntdwdwj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xuc7lobqs"/><path class="nby-j5t1p"/><path class="a0m07idav"/><path class="l9ntdwdwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-oil-tank-48-bold"} {...others} />);
}

export default Component;
