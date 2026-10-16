import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvpjufbao.css';
import '../../css/f/fybrpkbhk.css';
import '../../css/l/l-srprb8h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fvpjufbao"/><path class="fybrpkbhk"/><path class="l-srprb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:micro-hydro-20-bold"} {...others} />);
}

export default Component;
