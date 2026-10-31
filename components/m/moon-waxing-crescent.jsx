import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1njp3l4b.css';
import '../../css/n/n8pog1kss.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v1njp3l4b"/><path class="n8pog1kss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:moon-waxing-crescent"} {...others} />);
}

export default Component;
