import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itqrq9bfi.css';
import '../../css/o/o7krsvz8t.css';
import '../../css/q/qkiwgercu.css';
import '../../css/b/bkw3dabrh.css';
import '../../css/j/j9oaf4c2u.css';
import '../../css/y/y6sy6qbup.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="itqrq9bfi"/><path class="o7krsvz8t"/><path class="qkiwgercu"/><path class="bkw3dabrh"/><path class="j9oaf4c2u"/><path class="y6sy6qbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-playing-water-polo"} {...others} />);
}

export default Component;
