import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq7hs77-a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fq7hs77-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:traffic-cone"} {...others} />);
}

export default Component;
