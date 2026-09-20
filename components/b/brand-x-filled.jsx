import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in57ykb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="in57ykb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-x-filled"} {...others} />);
}

export default Component;
