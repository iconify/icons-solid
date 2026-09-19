import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd-6dbc8x.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="sd-6dbc8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:fire-burner"} {...others} />);
}

export default Component;
