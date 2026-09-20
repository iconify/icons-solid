import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9h0xjb8f.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="e9h0xjb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:partly-cloudy-day"} {...others} />);
}

export default Component;
