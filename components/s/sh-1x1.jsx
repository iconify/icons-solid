import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v72wjjzip.css';
import '../../css/i/iyk9pejyo.css';
import '../../css/z/z8sabr9cd.css';
import '../../css/i/i6gyrgb-l.css';
import '../../css/v/v_3yuqt3v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v72wjjzip"/><path class="iyk9pejyo"/><path class="z8sabr9cd"/><path class="i6gyrgb-l"/><path class="v_3yuqt3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sh-1x1"} {...others} />);
}

export default Component;
