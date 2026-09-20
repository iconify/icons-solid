import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmje_kq9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rmje_kq9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:arrow-down-24"} {...others} />);
}

export default Component;
