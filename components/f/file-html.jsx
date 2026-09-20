import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssp6cobkf.css';
import '../../css/l/luxvfacfp.css';
import '../../css/j/jzs00pbkg.css';
import '../../css/b/b88t7xmvt.css';
import '../../css/u/uq0s7-beh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ssp6cobkf"/><path class="luxvfacfp"/><path class="jzs00pbkg"/><path class="b88t7xmvt"/><path class="uq0s7-beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-html"} {...others} />);
}

export default Component;
