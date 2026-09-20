import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo_eecq-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oo_eecq-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:google-drive-duotone"} {...others} />);
}

export default Component;
