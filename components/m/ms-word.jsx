import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp7upebym.css';
import '../../css/a/a1r6rtrur.css';
import '../../css/y/yzy9h1bkw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="xp7upebym"><path class="a1r6rtrur"/><path class="yzy9h1bkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ms-word"} {...others} />);
}

export default Component;
