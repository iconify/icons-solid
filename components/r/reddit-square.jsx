import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9f2nzuog.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="w9f2nzuog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:reddit-square"} {...others} />);
}

export default Component;
