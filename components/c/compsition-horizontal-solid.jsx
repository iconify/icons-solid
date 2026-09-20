import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7m83wb8t.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="g7m83wb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:compsition-horizontal-solid"} {...others} />);
}

export default Component;
