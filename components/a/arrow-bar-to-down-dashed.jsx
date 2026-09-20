import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhha36vhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhha36vhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-bar-to-down-dashed"} {...others} />);
}

export default Component;
