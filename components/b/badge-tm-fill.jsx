import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpxaggc5x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gpxaggc5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:badge-tm-fill"} {...others} />);
}

export default Component;
