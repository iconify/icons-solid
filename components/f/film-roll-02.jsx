import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/heyq2bc2u.css';
import '../../css/m/mrda_3qxu.css';
import '../../css/h/hjjceedbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="heyq2bc2u"/><path class="mrda_3qxu"/><path class="hjjceedbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:film-roll-02"} {...others} />);
}

export default Component;
