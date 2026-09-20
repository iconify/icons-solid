import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwga7p4ik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwga7p4ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stethoscope-bold"} {...others} />);
}

export default Component;
