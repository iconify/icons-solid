import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abkecsx_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="abkecsx_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:expand-full"} {...others} />);
}

export default Component;
