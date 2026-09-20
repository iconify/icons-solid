import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nicmf8b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nicmf8b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:navigation-cancel"} {...others} />);
}

export default Component;
