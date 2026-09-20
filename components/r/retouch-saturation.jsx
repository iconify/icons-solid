import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw7ruzy2e.css';
import '../../css/a/ay63a2o9s.css';
import '../../css/n/nqlosb-6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rw7ruzy2e"/><path class="ay63a2o9s"/><path class="nqlosb-6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:retouch-saturation"} {...others} />);
}

export default Component;
