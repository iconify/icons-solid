import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac7p6yblo.css';
import '../../css/n/njy6bmz6d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ac7p6yblo"/><path class="njy6bmz6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wattmeter-48"} {...others} />);
}

export default Component;
