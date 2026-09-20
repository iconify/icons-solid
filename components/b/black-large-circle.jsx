import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1kn8_3bk.css';
import '../../css/k/kbay0kr8o.css';
import '../../css/t/tlh0720xz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f1kn8_3bk"/><path class="kbay0kr8o"/><path class="tlh0720xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-large-circle"} {...others} />);
}

export default Component;
