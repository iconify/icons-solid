import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_vii1mtq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_vii1mtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:heart-circle"} {...others} />);
}

export default Component;
