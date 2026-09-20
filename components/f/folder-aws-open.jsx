import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aylyh4brw.css';
import '../../css/b/bpmtllbfx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aylyh4brw"/><path class="bpmtllbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-aws-open"} {...others} />);
}

export default Component;
