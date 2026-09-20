import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a13q3r_5r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="a13q3r_5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:ear-atop-slash-with-t"} {...others} />);
}

export default Component;
