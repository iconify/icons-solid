import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz2jks-da.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vz2jks-da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:check-tick-16"} {...others} />);
}

export default Component;
