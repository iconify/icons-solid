import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okput2b5x.css';
import '../../css/n/n4gtcv7gc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="okput2b5x"/><path class="n4gtcv7gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:settings"} {...others} />);
}

export default Component;
