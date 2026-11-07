import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3cwxfump.css';
import '../../css/k/ksuq6mb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3cwxfump"/><path class="ksuq6mb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-bottom-down-outline"} {...others} />);
}

export default Component;
