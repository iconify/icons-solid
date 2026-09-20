import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs6zg7buw.css';
import '../../css/q/qnp378w6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cs6zg7buw"/><path class="qnp378w6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:martial-arts-helmet-bold"} {...others} />);
}

export default Component;
