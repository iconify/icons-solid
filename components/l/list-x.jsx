import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g0qmkibye.css';
import '../../css/i/itj7rzbqn.css';
import '../../css/s/skul-ck5q.css';
import '../../css/u/ut-furcmy.css';
import '../../css/j/j0jq05s6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="g0qmkibye wm-shadow"/><path class="itj7rzbqn wm-shadow"/><path class="skul-ck5q"/><path class="ut-furcmy"/><path class="j0jq05s6q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-x"} {...others} />);
}

export default Component;
