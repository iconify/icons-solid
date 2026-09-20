import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/y0wd1cbyv.css';
import '../../css/h/hzwgu_bvm.css';
import '../../css/h/htpoaxbaj.css';
import '../../css/o/ovze9ktjv.css';
import '../../css/v/vn3hvpptx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="y0wd1cbyv"/><path class="hzwgu_bvm"/><path class="htpoaxbaj"/><path class="ovze9ktjv"/><path class="vn3hvpptx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:polaroid"} {...others} />);
}

export default Component;
