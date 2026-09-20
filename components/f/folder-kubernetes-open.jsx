import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q90-1_bvc.css';
import '../../css/q/qqn7q5bip.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q90-1_bvc"/><path class="qqn7q5bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-kubernetes-open"} {...others} />);
}

export default Component;
