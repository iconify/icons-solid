import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgc4gwb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgc4gwb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:gift-card-fill"} {...others} />);
}

export default Component;
