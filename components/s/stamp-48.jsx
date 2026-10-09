import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1m2c5x5x.css';
import '../../css/z/zxs4re9vm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l1m2c5x5x"/><path class="zxs4re9vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stamp-48"} {...others} />);
}

export default Component;
