import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-mqn4bbl.css';
import '../../css/f/f6ex0_t5k.css';
import '../../css/n/n67oa5bpd.css';
import '../../css/g/gpj8g2b5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s-mqn4bbl"/><path class="f6ex0_t5k"/><path class="n67oa5bpd"/><path class="gpj8g2b5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:speaker-stand"} {...others} />);
}

export default Component;
