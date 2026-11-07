import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0cqj4bnv.css';
import '../../css/q/qmhcqtbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y0cqj4bnv"/><path clip-rule="evenodd" class="qmhcqtbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:target-outline"} {...others} />);
}

export default Component;
