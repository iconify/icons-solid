import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-5x6nayi.css';

const viewBox = {"width":153,"height":42};
const content = `<path clip-rule="evenodd" class="r-5x6nayi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:digikala-persian-text"} {...others} />);
}

export default Component;
