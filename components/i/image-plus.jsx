import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvz3gdbus.css';
import '../../css/m/mz1hr1bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvz3gdbus"/><path class="mz1hr1bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:image-plus"} {...others} />);
}

export default Component;
