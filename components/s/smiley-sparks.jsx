import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/a/a1v1mv8wj.css';
import '../../css/w/winlt7dii.css';
import '../../css/p/p6pl2pbbt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="a1v1mv8wj"/><path class="winlt7dii"/><path class="p6pl2pbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:smiley-sparks"} {...others} />);
}

export default Component;
