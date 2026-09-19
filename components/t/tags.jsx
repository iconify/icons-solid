import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owrpg8bqi.css';
import '../../css/a/ani5aab9r.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="owrpg8bqi"/><path class="ani5aab9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:tags"} {...others} />);
}

export default Component;
