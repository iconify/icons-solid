import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imo-0w39a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="imo-0w39a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bar-chart-line-fill"} {...others} />);
}

export default Component;
