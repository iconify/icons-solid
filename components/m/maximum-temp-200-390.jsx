import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvwx6cb1a.css';

const viewBox = {"width":512,"height":472};
const content = `<path class="bvwx6cb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:maximum-temp-200-390"} {...others} />);
}

export default Component;
