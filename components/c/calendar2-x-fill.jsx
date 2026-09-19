import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlvpvna1p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mlvpvna1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:calendar2-x-fill"} {...others} />);
}

export default Component;
