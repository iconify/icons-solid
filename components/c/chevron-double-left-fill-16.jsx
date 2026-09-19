import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrmfh6b7w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jrmfh6b7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chevron-double-left-fill-16"} {...others} />);
}

export default Component;
