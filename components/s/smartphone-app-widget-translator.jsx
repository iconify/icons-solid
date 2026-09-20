import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqkav9c8l.css';
import '../../css/b/bpfu64dcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqkav9c8l"/><path class="bpfu64dcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smartphone-app-widget-translator"} {...others} />);
}

export default Component;
