import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dccl6cslv.css';
import '../../css/a/a0a43bbqu.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="dccl6cslv"/><path class="a0a43bbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:gear"} {...others} />);
}

export default Component;
