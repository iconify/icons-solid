import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prl8l2bvy.css';
import '../../css/p/ptfrs5bkc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="prl8l2bvy"/><path class="ptfrs5bkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-trigger-open"} {...others} />);
}

export default Component;
