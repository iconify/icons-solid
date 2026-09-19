import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/h57e_jpgb.css';
import '../../css/b/bsx-gibzg.css';
import '../../css/t/tr1viwtnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="h57e_jpgb"/><path class="bsx-gibzg"/><path class="tr1viwtnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:edit-fade"} {...others} />);
}

export default Component;
