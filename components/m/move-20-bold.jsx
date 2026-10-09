import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u20py2moy.css';
import '../../css/h/hi068jb0r.css';
import '../../css/u/uajmqugut.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u20py2moy"/><path class="hi068jb0r"/><path class="uajmqugut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-20-bold"} {...others} />);
}

export default Component;
