import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyqlt6mrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyqlt6mrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:attachment-01"} {...others} />);
}

export default Component;
