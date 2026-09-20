import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0dmwob8v.css';
import '../../css/k/k03e-mbxb.css';
import '../../css/p/pt9n8d3fl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0dmwob8v"/><path class="k03e-mbxb"/><path class="pt9n8d3fl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gains"} {...others} />);
}

export default Component;
