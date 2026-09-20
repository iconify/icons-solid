import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx2l3o9hm.css';
import '../../css/c/catkmrzgd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gx2l3o9hm"/><path class="catkmrzgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-unity-open"} {...others} />);
}

export default Component;
