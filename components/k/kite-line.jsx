import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he7n4hb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="he7n4hb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:kite-line"} {...others} />);
}

export default Component;
