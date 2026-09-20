import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj5nrubhr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xj5nrubhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:parking-bicycle-14"} {...others} />);
}

export default Component;
