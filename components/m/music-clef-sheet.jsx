import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j---shb0m.css';
import '../../css/n/neea8pi3k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j---shb0m"/><path class="neea8pi3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-clef-sheet"} {...others} />);
}

export default Component;
