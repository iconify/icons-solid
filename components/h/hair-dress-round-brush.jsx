import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/a/a9ppz5tnn.css';
import '../../css/z/zehobabjs.css';
import '../../css/i/idu6018ed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="a9ppz5tnn"/><path class="zehobabjs"/><path class="idu6018ed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:hair-dress-round-brush"} {...others} />);
}

export default Component;
