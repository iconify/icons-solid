import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6ntrhbag.css';
import '../../css/d/d47zgac9l.css';
import '../../css/h/hjy07h-_o.css';
import '../../css/e/e1xt7abyh.css';
import '../../css/e/e0fav9sta.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p6ntrhbag"/><path class="d47zgac9l"/><path class="hjy07h-_o"/><path class="e1xt7abyh"/><path class="e0fav9sta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:boule-bread"} {...others} />);
}

export default Component;
