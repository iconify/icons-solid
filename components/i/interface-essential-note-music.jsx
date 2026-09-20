import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_mebygut.css';
import '../../css/j/jmg8jub9f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i_mebygut"/><path class="jmg8jub9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-note-music"} {...others} />);
}

export default Component;
