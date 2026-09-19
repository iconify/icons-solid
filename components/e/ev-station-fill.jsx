import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lio3y5lbh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lio3y5lbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:ev-station-fill"} {...others} />);
}

export default Component;
