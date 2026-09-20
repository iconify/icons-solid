import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhp6qvzak.css';
import '../../css/v/vo71evf5d.css';
import '../../css/j/jsyno-bnz.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zhp6qvzak"/><path class="vo71evf5d"/><path class="jsyno-bnz"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:aquarius"} {...others} />);
}

export default Component;
