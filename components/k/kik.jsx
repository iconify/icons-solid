import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4lu-wbzu.css';

const viewBox = {"width":384,"height":488};
const content = `<path class="o4lu-wbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:kik"} {...others} />);
}

export default Component;
