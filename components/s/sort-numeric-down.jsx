import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk4a8etro.css';
import '../../css/n/nwj7terdc.css';
import '../../css/l/lh639nb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qk4a8etro"/><path class="nwj7terdc"/><path class="lh639nb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sort-numeric-down"} {...others} />);
}

export default Component;
