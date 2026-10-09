import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2ioum2-g.css';
import '../../css/b/bwjcn-b3e.css';
import '../../css/k/k-kjrmbld.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i2ioum2-g"/><path class="bwjcn-b3e"/><path class="k-kjrmbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-48-bold"} {...others} />);
}

export default Component;
