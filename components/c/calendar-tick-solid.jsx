import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh8kezbqr.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="bh8kezbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:calendar-tick-solid"} {...others} />);
}

export default Component;
