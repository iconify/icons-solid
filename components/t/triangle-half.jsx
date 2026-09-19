import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlhhcj4sl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vlhhcj4sl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:triangle-half"} {...others} />);
}

export default Component;
