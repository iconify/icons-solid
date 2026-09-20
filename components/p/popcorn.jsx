import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/i/i_3wtgbzk.css';
import '../../css/j/j8pzxabpy.css';
import '../../css/z/z0o2v5bey.css';
import '../../css/b/bdafg4bwl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="i_3wtgbzk"/><path class="j8pzxabpy"/><path class="z0o2v5bey"/><path class="bdafg4bwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:popcorn"} {...others} />);
}

export default Component;
