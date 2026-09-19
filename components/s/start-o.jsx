import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaa3j5mot.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="eaa3j5mot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:start-o"} {...others} />);
}

export default Component;
