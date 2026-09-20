import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qveazabrj.css';
import '../../css/v/v65d5prbw.css';
import '../../css/s/snb19mb6h.css';
import '../../css/f/fg03-nb6a.css';
import '../../css/d/d5noox9dg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qveazabrj"/><path class="v65d5prbw"/><path class="snb19mb6h"/><path class="fg03-nb6a"/><path class="d5noox9dg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:building-13"} {...others} />);
}

export default Component;
