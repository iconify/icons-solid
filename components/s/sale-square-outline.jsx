import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woe0hukjy.css';
import '../../css/c/c_jaw7s9r.css';
import '../../css/s/s8ujp6b8o.css';
import '../../css/h/hjkpptbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="woe0hukjy"/><path class="c_jaw7s9r"/><path clip-rule="evenodd" class="s8ujp6b8o"/><path clip-rule="evenodd" class="hjkpptbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sale-square-outline"} {...others} />);
}

export default Component;
