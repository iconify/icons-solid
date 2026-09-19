import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t11qeu26y.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="t11qeu26y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:right-arrow-circled-small"} {...others} />);
}

export default Component;
