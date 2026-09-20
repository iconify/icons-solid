import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y69hv9biv.css';
import '../../css/r/ro3kpsbzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y69hv9biv"/><path class="ro3kpsbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:alert-24"} {...others} />);
}

export default Component;
