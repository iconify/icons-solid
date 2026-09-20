import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0y7rc81h.css';
import '../../css/s/s-i43gbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0y7rc81h"/><path class="s-i43gbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:refresh"} {...others} />);
}

export default Component;
