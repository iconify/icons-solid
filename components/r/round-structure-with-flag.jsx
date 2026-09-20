import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5q5vuphz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d5q5vuphz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:round-structure-with-flag"} {...others} />);
}

export default Component;
