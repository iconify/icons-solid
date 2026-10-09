import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx5vtushp.css';
import '../../css/w/wzis-qf2x.css';
import '../../css/p/p8876xbpi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zx5vtushp"/><path class="wzis-qf2x"/><path class="p8876xbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-offset-48"} {...others} />);
}

export default Component;
