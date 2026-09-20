import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isei8jc5c.css';
import '../../css/x/x6uxd8bue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="isei8jc5c"/><rect class="x6uxd8bue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-fill-duotone"} {...others} />);
}

export default Component;
