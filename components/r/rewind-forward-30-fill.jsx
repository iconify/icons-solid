import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d92pih7bm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d92pih7bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rewind-forward-30-fill"} {...others} />);
}

export default Component;
