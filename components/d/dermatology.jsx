import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ful3b6bej.css';
import '../../css/h/h5y8-bciz.css';
import '../../css/q/qqkcisb9s.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ful3b6bej"/><path class="h5y8-bciz"/><path class="qqkcisb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:dermatology"} {...others} />);
}

export default Component;
