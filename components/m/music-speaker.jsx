import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bstajwh4p.css';
import '../../css/f/fbeehkbqk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bstajwh4p"/><path class="fbeehkbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-speaker"} {...others} />);
}

export default Component;
