import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9w7bjbfj.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="n9w7bjbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:user-large"} {...others} />);
}

export default Component;
