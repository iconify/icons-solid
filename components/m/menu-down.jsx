import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7d-dd35i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t7d-dd35i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:menu-down"} {...others} />);
}

export default Component;
