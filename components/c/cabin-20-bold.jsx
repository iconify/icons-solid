import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7luzgj2a.css';
import '../../css/x/x_dypm6zl.css';
import '../../css/z/zi3h6zbwn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i7luzgj2a"/><path class="x_dypm6zl"/><path class="zi3h6zbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cabin-20-bold"} {...others} />);
}

export default Component;
