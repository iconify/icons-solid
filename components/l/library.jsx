import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zy-b_bcqi.css';
import '../../css/v/vnrjbobxg.css';
import '../../css/i/i4zp26qil.css';
import '../../css/d/db_dzachk.css';
import '../../css/o/ob1ynnb3a.css';
import '../../css/l/l9m6x-bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zy-b_bcqi"/><path class="vnrjbobxg wm-shadow"/><path class="i4zp26qil"/><path class="db_dzachk"/><path class="ob1ynnb3a"/><path class="l9m6x-bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:library"} {...others} />);
}

export default Component;
