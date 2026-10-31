import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukv6olbwm.css';
import '../../css/f/fnblp6ymy.css';
import '../../css/j/jcc8b939g.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ukv6olbwm"/><path class="fnblp6ymy"/><path class="jcc8b939g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:tatarstan"} {...others} />);
}

export default Component;
