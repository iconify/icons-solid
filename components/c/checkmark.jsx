import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlv30xa8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dlv30xa8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:checkmark"} {...others} />);
}

export default Component;
