import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lz82yy_8s.css';
import '../../css/j/joi08-bjf.css';
import '../../css/a/a18fncc1r.css';
import '../../css/m/mg8otu75v.css';
import '../../css/h/hyey6ek9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lz82yy_8s"/><path class="joi08-bjf"/><path class="a18fncc1r"/><path class="mg8otu75v"/><path class="hyey6ek9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:water-straw"} {...others} />);
}

export default Component;
