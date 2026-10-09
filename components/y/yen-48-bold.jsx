import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp8l54blm.css';
import '../../css/u/udr_1ybfu.css';
import '../../css/y/ymqwf0tfs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bp8l54blm"/><path class="udr_1ybfu"/><path class="ymqwf0tfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yen-48-bold"} {...others} />);
}

export default Component;
