import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8iugqbno.css';
import '../../css/l/lg5c8jbrj.css';
import '../../css/q/qzwbahb4k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j8iugqbno"/><path class="lg5c8jbrj"/><path class="qzwbahb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wardrowbe"} {...others} />);
}

export default Component;
