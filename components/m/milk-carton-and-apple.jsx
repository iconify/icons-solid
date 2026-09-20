import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_yatmezl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="a_yatmezl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:milk-carton-and-apple"} {...others} />);
}

export default Component;
