import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtt81nbxc.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="jtt81nbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:wizards-of-the-coast"} {...others} />);
}

export default Component;
