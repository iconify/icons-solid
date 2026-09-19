import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbfi7hipm.css';
import '../../css/a/amdrwrbxn.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="jbfi7hipm"/><path class="amdrwrbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:assembly"} {...others} />);
}

export default Component;
