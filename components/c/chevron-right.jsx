import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw8qzuoks.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aw8qzuoks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:chevron-right"} {...others} />);
}

export default Component;
