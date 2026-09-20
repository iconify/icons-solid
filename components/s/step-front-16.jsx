import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzt8l7xqk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rzt8l7xqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:step-front-16"} {...others} />);
}

export default Component;
