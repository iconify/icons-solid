import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wllv4abeh.css';
import '../../css/u/ui1cszbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wllv4abeh"/><path class="ui1cszbdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:telephone-1"} {...others} />);
}

export default Component;
