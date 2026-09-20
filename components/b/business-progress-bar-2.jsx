import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzgpz6bbq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yzgpz6bbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:business-progress-bar-2"} {...others} />);
}

export default Component;
