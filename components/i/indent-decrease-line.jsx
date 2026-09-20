import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-b_krv-u.css';
import '../../css/s/s99lf0bbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-b_krv-u"/><path class="s99lf0bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:indent-decrease-line"} {...others} />);
}

export default Component;
