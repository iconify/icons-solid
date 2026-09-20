import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3hw_dbub.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m3hw_dbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:inbox-complete-solid"} {...others} />);
}

export default Component;
