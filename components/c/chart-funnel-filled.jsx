import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft4q3vbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ft4q3vbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-funnel-filled"} {...others} />);
}

export default Component;
