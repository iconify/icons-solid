import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnu_thbtj.css';
import '../../css/d/dbh9pcbkw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="bnu_thbtj"/><path class="dbh9pcbkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:weary-cat"} {...others} />);
}

export default Component;
