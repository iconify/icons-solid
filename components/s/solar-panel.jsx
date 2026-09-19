import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4t2u9hnk.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="m4t2u9hnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:solar-panel"} {...others} />);
}

export default Component;
