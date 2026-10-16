import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inog0fb6a.css';
import '../../css/a/axk7hmbie.css';
import '../../css/l/l7unjebct.css';
import '../../css/y/y_rvfmb9n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="inog0fb6a"/><path class="axk7hmbie"/><path class="l7unjebct"/><path class="y_rvfmb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-oil-tank-20"} {...others} />);
}

export default Component;
