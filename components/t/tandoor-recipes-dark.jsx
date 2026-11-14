import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9y6adcht.css';
import '../../css/e/e5qdz8_wp.css';
import '../../css/l/l4pq8dbwm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b9y6adcht"/><path class="e5qdz8_wp"/><path class="l4pq8dbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tandoor-recipes-dark"} {...others} />);
}

export default Component;
