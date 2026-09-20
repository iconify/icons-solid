import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhgt1i-cv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uhgt1i-cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:square-stroked-15"} {...others} />);
}

export default Component;
