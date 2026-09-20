import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tta3otbad.css';
import '../../css/z/zza0bbbhx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tta3otbad"/><path class="zza0bbbhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-skills-open"} {...others} />);
}

export default Component;
