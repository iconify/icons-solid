import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etg_j4bre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="etg_j4bre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:align-box-bottom-left"} {...others} />);
}

export default Component;
