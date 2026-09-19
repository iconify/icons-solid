import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_g9z3bbe.css';

const viewBox = {"width":833,"height":1024};
const content = `<path class="a_g9z3bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fontrounded"} {...others} />);
}

export default Component;
