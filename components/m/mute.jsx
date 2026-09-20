import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oflhhkbur.css';
import '../../css/r/rql-eabty.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oflhhkbur"/><path class="rql-eabty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:mute"} {...others} />);
}

export default Component;
