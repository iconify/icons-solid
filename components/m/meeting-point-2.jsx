import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma4g31zac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ma4g31zac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:meeting-point-2"} {...others} />);
}

export default Component;
