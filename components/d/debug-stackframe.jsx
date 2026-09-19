import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-m0grb6b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h-m0grb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:debug-stackframe"} {...others} />);
}

export default Component;
