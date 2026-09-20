import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twg7vog0p.css';
import '../../css/o/o-tnwkjea.css';
import '../../css/o/o_12bt94x.css';
import '../../css/n/n8hafptrt.css';
import '../../css/y/yo9qcxb9i.css';
import '../../css/j/jnsrukbyw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="twg7vog0p"/><path class="o-tnwkjea"/><path clip-rule="evenodd" class="o_12bt94x"/><path class="n8hafptrt"/><path class="yo9qcxb9i"/><path class="jnsrukbyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:contact-book"} {...others} />);
}

export default Component;
