import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-y_v-bos.css';
import '../../css/n/nb88mtb2q.css';
import '../../css/z/zz8vjn9xx.css';
import '../../css/x/xog3t_bph.css';
import '../../css/i/ism4j27fn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o-y_v-bos"/><path class="nb88mtb2q"/><path class="zz8vjn9xx"/><path class="xog3t_bph"/><path class="ism4j27fn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smiley-crying-rainbow"} {...others} />);
}

export default Component;
