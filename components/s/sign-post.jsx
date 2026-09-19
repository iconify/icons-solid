import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe2q5pf1u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pe2q5pf1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:sign-post"} {...others} />);
}

export default Component;
