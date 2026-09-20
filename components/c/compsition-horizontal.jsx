import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg6_6qt2f.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cg6_6qt2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:compsition-horizontal"} {...others} />);
}

export default Component;
