import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycclpjbnb.css';
import '../../css/n/ndahk2b0e.css';
import '../../css/n/nh3pp-bwc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ycclpjbnb"/><path class="ndahk2b0e"/><path class="nh3pp-bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:imbalance-48"} {...others} />);
}

export default Component;
