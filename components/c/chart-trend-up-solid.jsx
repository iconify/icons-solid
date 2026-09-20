import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6f6_qben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6f6_qben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chart-trend-up-solid"} {...others} />);
}

export default Component;
