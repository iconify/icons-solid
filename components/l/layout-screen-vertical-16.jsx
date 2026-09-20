import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilxn7f33c.css';
import '../../css/e/e-qkt480u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ilxn7f33c"/><path clip-rule="evenodd" class="e-qkt480u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layout-screen-vertical-16"} {...others} />);
}

export default Component;
