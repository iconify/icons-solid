import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwjzuebfl.css';
import '../../css/b/bbwt9j4jc.css';
import '../../css/i/iqe7qjbhy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fwjzuebfl"/><path class="bbwt9j4jc"/><path class="iqe7qjbhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:onion"} {...others} />);
}

export default Component;
