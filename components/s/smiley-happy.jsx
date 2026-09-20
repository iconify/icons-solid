import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-s39obqw.css';
import '../../css/p/pj7apackc.css';
import '../../css/u/ujkr1hb8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-s39obqw"/><path class="pj7apackc"/><path class="ujkr1hb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-happy"} {...others} />);
}

export default Component;
