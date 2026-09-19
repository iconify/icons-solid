import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x71ga5btm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x71ga5btm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:menu-button-wide-fill"} {...others} />);
}

export default Component;
