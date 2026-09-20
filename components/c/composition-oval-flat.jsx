import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm7vcbbpm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="lm7vcbbpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:composition-oval-flat"} {...others} />);
}

export default Component;
