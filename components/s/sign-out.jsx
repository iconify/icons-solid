import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynf4fk1jh.css';

const viewBox = {"width":16,"height":17};
const content = `<path class="ynf4fk1jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:sign-out"} {...others} />);
}

export default Component;
