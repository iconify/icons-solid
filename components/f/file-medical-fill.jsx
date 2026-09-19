import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsvaxh48l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rsvaxh48l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-medical-fill"} {...others} />);
}

export default Component;
