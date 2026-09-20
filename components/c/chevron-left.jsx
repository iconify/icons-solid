import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs93c7boo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qs93c7boo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:chevron-left"} {...others} />);
}

export default Component;
