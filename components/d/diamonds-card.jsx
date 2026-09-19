import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi57_fbmb.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="xi57_fbmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:diamonds-card"} {...others} />);
}

export default Component;
