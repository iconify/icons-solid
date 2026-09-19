import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfonkl3tm.css';
import '../../css/f/ff9oe5f4b.css';
import '../../css/u/ud97m9_ht.css';
import '../../css/e/ejtxx9bgq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sfonkl3tm"/><path class="ff9oe5f4b"/><path class="ud97m9_ht"/><path class="ejtxx9bgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:spiralnotepad"} {...others} />);
}

export default Component;
