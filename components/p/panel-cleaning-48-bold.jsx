import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln0k-gcok.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ln0k-gcok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-cleaning-48-bold"} {...others} />);
}

export default Component;
