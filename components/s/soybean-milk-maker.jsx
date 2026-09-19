import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzm20-b0d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jzm20-b0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:soybean-milk-maker"} {...others} />);
}

export default Component;
