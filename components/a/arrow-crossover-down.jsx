import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9s90sbkm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="x9s90sbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-crossover-down"} {...others} />);
}

export default Component;
