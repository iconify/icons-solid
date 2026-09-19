import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmaaj5vii.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pmaaj5vii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:cloud-done-sharp"} {...others} />);
}

export default Component;
