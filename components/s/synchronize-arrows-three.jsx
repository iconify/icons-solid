import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwlj-u0wk.css';
import '../../css/r/r1-7yy7ih.css';
import '../../css/r/rnvq-7b5b.css';
import '../../css/a/a7-07hblu.css';
import '../../css/j/jvwylz30c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jwlj-u0wk"/><path class="r1-7yy7ih"/><path class="rnvq-7b5b"/><path class="a7-07hblu"/><path class="jvwylz30c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:synchronize-arrows-three"} {...others} />);
}

export default Component;
