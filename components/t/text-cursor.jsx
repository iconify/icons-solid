import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2yf3iojk.css';
import '../../css/b/bhlv4viug.css';
import '../../css/a/avwra9bwv.css';
import '../../css/x/xttyvqbqx.css';
import '../../css/d/da8bhmbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j2yf3iojk wm-shadow"/><path class="bhlv4viug wm-k"/><path class="avwra9bwv wm-k"/><path class="wm-k xttyvqbqx"/><path class="da8bhmbhj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:text-cursor"} {...others} />);
}

export default Component;
