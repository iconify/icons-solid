import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqsk4dbaf.css';
import '../../css/b/b8ymvlblf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tqsk4dbaf"/><path class="b8ymvlblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-album-cd-disk-playlist"} {...others} />);
}

export default Component;
