import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k70tccb4z.css';
import '../../css/j/jhd2mpbdy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k70tccb4z"/><path class="jhd2mpbdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:briefcase"} {...others} />);
}

export default Component;
