import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4q3a5btx.css';
import '../../css/x/x38o7w6oc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d4q3a5btx"/><path class="x38o7w6oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-pdf-stroke-20"} {...others} />);
}

export default Component;
