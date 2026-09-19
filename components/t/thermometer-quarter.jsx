import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bapu0m6tu.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="bapu0m6tu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:thermometer-quarter"} {...others} />);
}

export default Component;
