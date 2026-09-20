import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo75l1ond.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oo75l1ond"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chart-trend-down-solid"} {...others} />);
}

export default Component;
