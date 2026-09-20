import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpgxckbdv.css';
import '../../css/u/us1tjmb7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpgxckbdv"/><path class="us1tjmb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hook"} {...others} />);
}

export default Component;
