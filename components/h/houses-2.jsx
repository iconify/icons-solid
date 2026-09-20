import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n52k6o0hd.css';
import '../../css/k/k_wh-tamw.css';
import '../../css/m/m-3zhz7pz.css';
import '../../css/j/jrlp85ggr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n52k6o0hd"/><path class="k_wh-tamw"/><path class="m-3zhz7pz"/><path class="jrlp85ggr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:houses-2"} {...others} />);
}

export default Component;
