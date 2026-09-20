import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dlo45vb0d.css';
import '../../css/w/wr5x_8_fb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><rect class="dlo45vb0d"/><rect class="wr5x_8_fb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-3-bottom-filled"} {...others} />);
}

export default Component;
