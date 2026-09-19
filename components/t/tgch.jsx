import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go11_ybvc.css';
import '../../css/m/md286fbip.css';
import '../../css/l/let265b9v.css';
import '../../css/z/zyet96blb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="go11_ybvc"/><g class="md286fbip"><path class="let265b9v"/><path class="zyet96blb"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:tgch"} {...others} />);
}

export default Component;
