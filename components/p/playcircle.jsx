import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg0k5bz1x.css';
import '../../css/d/d47xi2b9o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mg0k5bz1x"/><path class="d47xi2b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:playcircle"} {...others} />);
}

export default Component;
