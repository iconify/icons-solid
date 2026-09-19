import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw6ppgbbn.css';
import '../../css/w/wf_7x7bqn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nw6ppgbbn"/><path class="wf_7x7bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:config-typescript"} {...others} />);
}

export default Component;
