import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brrzp7bqp.css';
import '../../css/y/yswlpl_1d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="brrzp7bqp"/><path class="yswlpl_1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:scooter-front"} {...others} />);
}

export default Component;
