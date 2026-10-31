import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c56ar3k9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c56ar3k9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bell-off-fill-round"} {...others} />);
}

export default Component;
