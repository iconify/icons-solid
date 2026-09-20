import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wiwotib1b.css';
import '../../css/k/kz5snccew.css';
import '../../css/s/s-3q_duef.css';
import '../../css/t/t5i4xb7db.css';
import '../../css/i/imn7sfeql.css';
import '../../css/j/jgb2v3bxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wiwotib1b"/><path class="kz5snccew"/><path class="s-3q_duef"/><path class="t5i4xb7db"/><path class="imn7sfeql"/><path class="jgb2v3bxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tags-favorite"} {...others} />);
}

export default Component;
