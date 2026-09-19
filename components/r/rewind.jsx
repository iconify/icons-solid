import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7vtcu26a.css';

const viewBox = {"width":384,"height":472};
const content = `<path class="n7vtcu26a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:rewind"} {...others} />);
}

export default Component;
