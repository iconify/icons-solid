import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py7ktqbvf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqzongvsz.css';
import '../../css/g/g6lwfgbbz.css';
import '../../css/o/owx_rqbmy.css';
import '../../css/u/upvz9zbxd.css';
import '../../css/a/avfakcaqq.css';
import '../../css/h/hav4rgbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGNj8XZdDN" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="py7ktqbvf"/></mask><g mask="url(#SVGNj8XZdDN)" class="ft5dv1b6b"><path class="tqzongvsz"/><path class="g6lwfgbbz"/><path class="owx_rqbmy"/><path class="upvz9zbxd"/><path class="avfakcaqq"/><path class="hav4rgbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:hammer-3"} {...others} />);
}

export default Component;
