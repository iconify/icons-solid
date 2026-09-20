import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha7uky3jy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ha7uky3jy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:electric-refueling-outline"} {...others} />);
}

export default Component;
