import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcjzqc7he.css';

const viewBox = {"width":36,"height":32};
const content = `<path class="bcjzqc7he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:bargraph"} {...others} />);
}

export default Component;
