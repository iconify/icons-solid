import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iw71_wb_u.css';
import '../../css/i/iv-2ojbcv.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/f/f7jbikrys.css';
import '../../css/y/ya652jbio.css';
import '../../css/o/onxz9exsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iw71_wb_u"/><path class="iv-2ojbcv"/><path class="g4vvtk_cw"/><path class="f7jbikrys"/><path class="ya652jbio"/><path class="onxz9exsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:volleyball-duotone"} {...others} />);
}

export default Component;
