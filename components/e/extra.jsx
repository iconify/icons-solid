import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3-5_c46r.css';
import '../../css/z/z3gsuri1a.css';
import '../../css/w/wqsp95-af.css';
import '../../css/i/ictzck4fu.css';
import '../../css/k/kfkgtizuw.css';
import '../../css/u/uy5am3boz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l3-5_c46r"/><path class="z3gsuri1a"/><path class="wqsp95-af"/><path class="ictzck4fu"/><path class="kfkgtizuw"/><path class="uy5am3boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:extra"} {...others} />);
}

export default Component;
