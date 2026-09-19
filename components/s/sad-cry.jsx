import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-xu_c3ui.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="u-xu_c3ui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:sad-cry"} {...others} />);
}

export default Component;
