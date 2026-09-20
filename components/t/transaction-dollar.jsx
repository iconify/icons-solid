import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpq1c0bwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rpq1c0bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transaction-dollar"} {...others} />);
}

export default Component;
