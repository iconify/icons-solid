import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epp-53c7z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="epp-53c7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:octagon"} {...others} />);
}

export default Component;
