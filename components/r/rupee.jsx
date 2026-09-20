import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neqi2zbmx.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="neqi2zbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:rupee"} {...others} />);
}

export default Component;
