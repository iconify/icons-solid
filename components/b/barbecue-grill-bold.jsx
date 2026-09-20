import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nga6i44tb.css';
import '../../css/r/r7yb4cbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nga6i44tb"/><path class="r7yb4cbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:barbecue-grill-bold"} {...others} />);
}

export default Component;
