import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx2dvxl_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rx2dvxl_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:expand-diagonal-duotone"} {...others} />);
}

export default Component;
