import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8rtsqbat.css';
import '../../css/a/afrdj8-pz.css';
import '../../css/f/f8hqc-b3h.css';
import '../../css/y/y4p12zbaj.css';
import '../../css/b/b8gxcdb5m.css';
import '../../css/a/a2ogdngjd.css';
import '../../css/o/o1kr6kbhf.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/rzypboc-u.css';
import '../../css/z/zbnmk4b3p.css';
import '../../css/z/z0jfow2cj.css';
import '../../css/v/vbvzsbb5x.css';

const viewBox = {"width":72,"height":72};
const content = `<circle transform="rotate(-45 36.14 35.999)" class="w8rtsqbat"/><circle transform="rotate(-45 22.142 22)" class="afrdj8-pz"/><path class="f8hqc-b3h"/><ellipse transform="rotate(-45 50.14 49.998)" class="y4p12zbaj"/><path class="b8gxcdb5m"/><circle transform="rotate(-45 36.142 36)" class="a2ogdngjd"/><path class="o1kr6kbhf"/><g class="ij2x_72vy"><circle transform="rotate(-45 36.14 35.999)" class="rzypboc-u"/><circle transform="rotate(-45 22 21.858)" class="zbnmk4b3p"/><circle transform="rotate(-45 50.284 50.142)" class="z0jfow2cj"/><path class="vbvzsbb5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dango"} {...others} />);
}

export default Component;
