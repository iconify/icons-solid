import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9etl60ow.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e9etl60ow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:shield-check-16"} {...others} />);
}

export default Component;
