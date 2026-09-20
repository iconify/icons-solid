import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egx-80bws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="egx-80bws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-look-up"} {...others} />);
}

export default Component;
