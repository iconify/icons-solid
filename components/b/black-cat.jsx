import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r9-8dsuvr.css';
import '../../css/t/todu1fbkz.css';
import '../../css/f/fn0sgebgx.css';
import '../../css/r/rew3kkb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r9-8dsuvr wm-shadow"/><path class="todu1fbkz wm-shadow"/><path class="fn0sgebgx"/><path class="rew3kkb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:black-cat"} {...others} />);
}

export default Component;
