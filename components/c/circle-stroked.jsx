import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_c6c0bhf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c_c6c0bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:circle-stroked"} {...others} />);
}

export default Component;
