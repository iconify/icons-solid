import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_dnzub6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_dnzub6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:letter-t-small"} {...others} />);
}

export default Component;
