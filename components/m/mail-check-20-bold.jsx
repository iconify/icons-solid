import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z49l83-sf.css';
import '../../css/o/o9np2sbrl.css';
import '../../css/f/frlh8xbdh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z49l83-sf"/><path class="o9np2sbrl"/><path class="frlh8xbdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-check-20-bold"} {...others} />);
}

export default Component;
