import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac7gi5bnu.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ac7gi5bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:arrow-o"} {...others} />);
}

export default Component;
