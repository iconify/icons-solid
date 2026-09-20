import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co-wucjiz.css';
import '../../css/f/f_gm7hjdf.css';
import '../../css/b/bqv3tabyp.css';
import '../../css/p/pzu8xpblm.css';
import '../../css/p/pswil9bdb.css';
import '../../css/u/u-bltgbhy.css';
import '../../css/i/iv3vv2mlt.css';
import '../../css/q/qii2tsbnn.css';
import '../../css/c/cp2qm534u.css';
import '../../css/p/pxggiz5cp.css';
import '../../css/j/jb3fbhbgk.css';
import '../../css/o/ol5_55uce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="co-wucjiz"/><path class="f_gm7hjdf"/><path class="bqv3tabyp"/><path class="pzu8xpblm"/><path class="pswil9bdb"/><path class="u-bltgbhy"/><path class="iv3vv2mlt"/><path class="qii2tsbnn"/><path class="cp2qm534u"/><path class="pxggiz5cp"/><path class="jb3fbhbgk"/><path class="ol5_55uce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shelf-books-1"} {...others} />);
}

export default Component;
