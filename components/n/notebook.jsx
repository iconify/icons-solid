import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gkdbr3bax.css';
import '../../css/p/pmmuggidj.css';
import '../../css/u/ug-wd558g.css';
import '../../css/a/ajwrlub9f.css';
import '../../css/o/o9hb7faeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gkdbr3bax wm-k"/><path class="pmmuggidj wm-shine"/><path class="ug-wd558g wm-shine"/><path class="ajwrlub9f wm-shine"/><path class="o9hb7faeo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:notebook"} {...others} />);
}

export default Component;
