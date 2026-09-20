import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfh5m5bzm.css';
import '../../css/k/kwvibbeog.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bfh5m5bzm"/><path clip-rule="evenodd" class="kwvibbeog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:location-16"} {...others} />);
}

export default Component;
