import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh2bt7bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh2bt7bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-letter-g-filled"} {...others} />);
}

export default Component;
