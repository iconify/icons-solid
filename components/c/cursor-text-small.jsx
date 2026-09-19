import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz5obbc_q.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="bz5obbc_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:cursor-text-small"} {...others} />);
}

export default Component;
