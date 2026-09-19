import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-sr4yt-t.css';
import '../../css/l/l3cxynbly.css';
import '../../css/a/asc15gb8k.css';

const viewBox = {"width":525,"height":512};
const content = `<path class="z-sr4yt-t"/><path class="l3cxynbly"/><path class="asc15gb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:stylelint"} {...others} />);
}

export default Component;
