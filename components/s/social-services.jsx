import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr_0ps4dh.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="pr_0ps4dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:social-services"} {...others} />);
}

export default Component;
