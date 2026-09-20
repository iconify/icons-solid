import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-pfo7vby.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="y-pfo7vby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:helicopter"} {...others} />);
}

export default Component;
