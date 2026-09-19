import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mmf-20b_f.css';
import '../../css/c/ct5l-hb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mmf-20b_f"/><path class="ct5l-hb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medicine-02"} {...others} />);
}

export default Component;
