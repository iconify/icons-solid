import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa5889vlx.css';
import '../../css/a/aa2olkmfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa5889vlx"/><path clip-rule="evenodd" class="aa2olkmfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-right-bold-duotone"} {...others} />);
}

export default Component;
