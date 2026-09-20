import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m90r2bo5t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m90r2bo5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:discussion-duplicate-16"} {...others} />);
}

export default Component;
