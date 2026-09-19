import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcebpw6vt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fcebpw6vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:grid-3x2"} {...others} />);
}

export default Component;
