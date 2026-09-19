import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1bj2u4dt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x1bj2u4dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:door-closed-fill"} {...others} />);
}

export default Component;
