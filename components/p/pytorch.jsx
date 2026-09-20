import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcso7vx-z.css';
import '../../css/f/f6wni1b_c.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="gcso7vx-z"/><path class="f6wni1b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:pytorch"} {...others} />);
}

export default Component;
