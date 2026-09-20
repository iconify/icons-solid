import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg7rb9b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lg7rb9b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-dry-off"} {...others} />);
}

export default Component;
