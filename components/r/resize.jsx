import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca5_jfd3t.css';

const viewBox = {"width":528,"height":520};
const content = `<path class="ca5_jfd3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:resize"} {...others} />);
}

export default Component;
