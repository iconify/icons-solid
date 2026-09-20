import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzddf_b4l.css';
import '../../css/l/lvp7n1b6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kzddf_b4l"/><path class="lvp7n1b6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:exclamation-triangle"} {...others} />);
}

export default Component;
