import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnzhe816f.css';
import '../../css/q/q5ga_h1wk.css';
import '../../css/c/c_rqzpd-h.css';
import '../../css/e/e01n1zikz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k xnzhe816f"/><path class="q5ga_h1wk wm-k"/><path class="c_rqzpd-h wm-a"/><path class="e01n1zikz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:beer"} {...others} />);
}

export default Component;
