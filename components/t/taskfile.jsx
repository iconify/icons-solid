import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziao2px2e.css';
import '../../css/h/hyv-2gbfp.css';
import '../../css/k/k9mgxccva.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ziao2px2e"/><path class="hyv-2gbfp"/><path class="k9mgxccva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:taskfile"} {...others} />);
}

export default Component;
