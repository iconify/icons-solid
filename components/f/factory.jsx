import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zynt9nlma.css';
import '../../css/m/mp8j32oal.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zynt9nlma"/><path class="mp8j32oal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:factory"} {...others} />);
}

export default Component;
