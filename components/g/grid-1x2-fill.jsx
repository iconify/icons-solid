import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d94pbcbsy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d94pbcbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:grid-1x2-fill"} {...others} />);
}

export default Component;
