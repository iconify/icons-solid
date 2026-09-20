import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b572sebbf.css';
import '../../css/s/sqgcj3ezp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b572sebbf"/><path class="sqgcj3ezp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:repeat-one-16"} {...others} />);
}

export default Component;
