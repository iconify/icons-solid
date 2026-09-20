import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/j/ja8_zg6om.css';
import '../../css/a/aiwa67byf.css';
import '../../css/m/mie-ygbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ja8_zg6om"/><path class="aiwa67byf"/><path class="mie-ygbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:qik-logo"} {...others} />);
}

export default Component;
