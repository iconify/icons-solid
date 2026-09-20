import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs_lo7bgx.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="cs_lo7bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:polyline"} {...others} />);
}

export default Component;
