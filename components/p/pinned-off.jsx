import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz7n2ea9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mz7n2ea9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pinned-off"} {...others} />);
}

export default Component;
