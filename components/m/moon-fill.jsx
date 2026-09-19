import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meg5cxbpz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="meg5cxbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:moon-fill"} {...others} />);
}

export default Component;
