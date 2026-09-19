import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmbc4zpnu.css';

const viewBox = {"width":480,"height":512};
const content = `<path class="kmbc4zpnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:lab"} {...others} />);
}

export default Component;
