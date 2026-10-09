import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afkvrrboz.css';
import '../../css/q/qekqfrbpb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="afkvrrboz"/><path class="qekqfrbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-left-up-20-bold"} {...others} />);
}

export default Component;
