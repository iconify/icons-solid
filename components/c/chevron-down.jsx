import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyd2g7b-t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jyd2g7b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:chevron-down"} {...others} />);
}

export default Component;
