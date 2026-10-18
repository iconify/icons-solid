import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf3b3gb2z.css';
import '../../css/y/y9zlo3-ee.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wf3b3gb2z"/><path class="y9zlo3-ee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biochar-48-bold"} {...others} />);
}

export default Component;
