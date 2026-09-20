import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s_js-cbbs.css';
import '../../css/x/x25k25b1j.css';
import '../../css/v/vk9tcg0_r.css';
import '../../css/p/pl7eujbqn.css';
import '../../css/g/ga1r04b9a.css';
import '../../css/e/e-epebbdk.css';
import '../../css/a/axc524bkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s_js-cbbs"/><path class="x25k25b1j"/><path class="vk9tcg0_r"/><path class="pl7eujbqn"/><path class="ga1r04b9a"/><path class="e-epebbdk"/><path class="axc524bkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-outline"} {...others} />);
}

export default Component;
