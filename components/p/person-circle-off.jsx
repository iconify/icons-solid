import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak0v_fljm.css';
import '../../css/q/q-0tevbrd.css';
import '../../css/s/st8r_y1jl.css';
import '../../css/j/jfigzne9w.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><g transform="translate(3 3)"><circle class="ak0v_fljm"/><path class="q-0tevbrd"/><path class="st8r_y1jl"/></g><path clip-rule="evenodd" class="jfigzne9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:person-circle-off"} {...others} />);
}

export default Component;
