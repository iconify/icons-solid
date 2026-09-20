import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qv8zy_5gv.css';
import '../../css/j/j98jpzbmy.css';
import '../../css/r/rkmim6boy.css';
import '../../css/j/ji5p1mbrf.css';
import '../../css/r/rvjnrbcgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qv8zy_5gv"/><path class="j98jpzbmy"/><path class="rkmim6boy"/><path class="ji5p1mbrf"/><path class="rvjnrbcgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:user-question"} {...others} />);
}

export default Component;
