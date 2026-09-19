import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qefw8rbzt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qefw8rbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:align-text-bottom"} {...others} />);
}

export default Component;
