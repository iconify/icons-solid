import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elaoyvwug.css';
import '../../css/q/qre15k4lx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="elaoyvwug"/><path class="qre15k4lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:squirrel"} {...others} />);
}

export default Component;
