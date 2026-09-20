import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up9vchbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="up9vchbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:adjustments-question"} {...others} />);
}

export default Component;
