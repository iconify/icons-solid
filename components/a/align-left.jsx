import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krpsxf9bo.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="krpsxf9bo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:align-left"} {...others} />);
}

export default Component;
