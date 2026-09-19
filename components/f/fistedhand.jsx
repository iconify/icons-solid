import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slzdijbqw.css';
import '../../css/p/pcxoghbnz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="slzdijbqw"/><path class="pcxoghbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fistedhand"} {...others} />);
}

export default Component;
