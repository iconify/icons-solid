import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n01if7bkm.css';
import '../../css/o/o6_ahpb2q.css';
import '../../css/h/h3rixiekm.css';
import '../../css/a/a7cb7nrdi.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGuIIGJdAj)" class="n01if7bkm"/><path fill="url(#SVGgeRKnBlj)" class="o6_ahpb2q"/><defs><linearGradient id="SVGuIIGJdAj" x1="12" x2="12.019" y1="17.5" y2="20.999" gradientUnits="userSpaceOnUse"><stop class="h3rixiekm"/><stop offset="1" class="a7cb7nrdi"/></linearGradient><linearGradient id="SVGgeRKnBlj" x1="21.027" x2="5.578" y1="17.995" y2="3.776" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:alert-24"} {...others} />);
}

export default Component;
