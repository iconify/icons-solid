import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8rlbkdii.css';
import '../../css/s/stpgr5ezp.css';
import '../../css/h/h1b59mcwr.css';
import '../../css/s/sss82lbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8rlbkdii"/><path class="stpgr5ezp"/><path class="h1b59mcwr"/><path class="sss82lbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-4-bold"} {...others} />);
}

export default Component;
