import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlrp5ncgh.css';
import '../../css/h/h0v27jb1z.css';
import '../../css/m/mk2o6bjvf.css';
import '../../css/m/mtwiifhwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nlrp5ncgh"/><path class="h0v27jb1z"/><path class="mk2o6bjvf"/><path class="mtwiifhwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:car-dashboard-warning"} {...others} />);
}

export default Component;
