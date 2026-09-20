import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0hhc3b9v.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="t0hhc3b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:arrows-up-down-12"} {...others} />);
}

export default Component;
