import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfd2lvbyk.css';
import '../../css/q/qfxjj7d4y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rfd2lvbyk"/><path class="qfxjj7d4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-vinyl-record"} {...others} />);
}

export default Component;
