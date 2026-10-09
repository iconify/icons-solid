import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzx5mchnl.css';
import '../../css/w/w2wr_lj5z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xzx5mchnl"/><path class="w2wr_lj5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:saw-48-bold"} {...others} />);
}

export default Component;
