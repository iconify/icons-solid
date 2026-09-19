import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/niwz-lbqb.css';
import '../../css/b/buiu9ebyw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="niwz-lbqb"/><path class="buiu9ebyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:unrealscript"} {...others} />);
}

export default Component;
