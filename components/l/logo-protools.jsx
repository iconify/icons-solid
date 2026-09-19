import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy_cr8baz.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="xy_cr8baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-protools"} {...others} />);
}

export default Component;
