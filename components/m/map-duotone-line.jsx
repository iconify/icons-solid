import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ih9e1vb8h.css';
import '../../css/x/xg3h85bnw.css';
import '../../css/x/xbh224b0r.css';
import '../../css/e/edss2cc6j.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGdf7dacXC"><g class="ft5dv1b6b"><path class="ih9e1vb8h"/><path class="xg3h85bnw"/><path class="xbh224b0r"/><circle class="edss2cc6j"/></g></mask></defs><path mask="url(#SVGdf7dacXC)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:map-duotone-line"} {...others} />);
}

export default Component;
