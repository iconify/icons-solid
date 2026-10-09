import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgca40b7u.css';
import '../../css/n/n10l0kbuj.css';
import '../../css/u/u-3ipjkjd.css';
import '../../css/k/kdauzw8di.css';
import '../../css/s/sq4pxgboe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fgca40b7u"/><path class="n10l0kbuj"/><path class="u-3ipjkjd"/><path class="kdauzw8di"/><path class="sq4pxgboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:helicopter-20"} {...others} />);
}

export default Component;
