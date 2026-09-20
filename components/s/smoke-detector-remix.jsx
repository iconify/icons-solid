import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of_484bvp.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="of_484bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smoke-detector-remix"} {...others} />);
}

export default Component;
