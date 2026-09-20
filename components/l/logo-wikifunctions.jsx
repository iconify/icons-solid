import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6v83qbqk.css';
import '../../css/c/c1ks9gyit.css';
import '../../css/a/azcv31byt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x6v83qbqk"/><path class="c1ks9gyit"/><path class="azcv31byt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:logo-wikifunctions"} {...others} />);
}

export default Component;
