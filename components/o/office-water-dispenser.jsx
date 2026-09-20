import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgm5fnibz.css';
import '../../css/f/f305l013m.css';
import '../../css/y/y5dclb5zf.css';
import '../../css/p/palbwub7b.css';
import '../../css/z/zj-8659hd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mgm5fnibz"/><path class="f305l013m"/><path class="y5dclb5zf"/><path class="palbwub7b"/><path class="zj-8659hd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-water-dispenser"} {...others} />);
}

export default Component;
