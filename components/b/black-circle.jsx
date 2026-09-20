import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcz0i0b6y.css';
import '../../css/b/b3uq48bmq.css';
import '../../css/c/clgcxl7va.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fcz0i0b6y"/><path class="b3uq48bmq"/><path class="clgcxl7va"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-circle"} {...others} />);
}

export default Component;
