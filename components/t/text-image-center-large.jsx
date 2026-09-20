import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac5gbxdnl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ac5gbxdnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:text-image-center-large"} {...others} />);
}

export default Component;
