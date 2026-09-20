import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac9ldtb9t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ac9ldtb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:volume"} {...others} />);
}

export default Component;
