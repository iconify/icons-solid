import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/resnd-7qf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="resnd-7qf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alert-triangle-off"} {...others} />);
}

export default Component;
