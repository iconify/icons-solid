import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epzhw5wxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="epzhw5wxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:border-bottom-plus"} {...others} />);
}

export default Component;
