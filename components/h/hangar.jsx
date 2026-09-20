import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahnu4ffkf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ahnu4ffkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:hangar"} {...others} />);
}

export default Component;
