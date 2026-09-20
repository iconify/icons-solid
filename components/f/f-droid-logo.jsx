import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hc5zd5brf.css';
import '../../css/a/a_pyc2bpc.css';
import '../../css/b/bnfq09b2d.css';
import '../../css/g/gyk0iu-vo.css';
import '../../css/i/iqiksqb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="hc5zd5brf"/><path class="a_pyc2bpc"/><path class="bnfq09b2d"/><path class="gyk0iu-vo"/><path class="iqiksqb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:f-droid-logo"} {...others} />);
}

export default Component;
