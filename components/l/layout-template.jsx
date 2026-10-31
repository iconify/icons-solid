import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pm10nib3l.css';
import '../../css/w/w69tt5b5x.css';
import '../../css/e/ec_vzom-t.css';
import '../../css/b/be7es10ib.css';
import '../../css/f/fwnb34_iv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pm10nib3l wm-shadow"/><path class="w69tt5b5x wm-shadow"/><path class="ec_vzom-t"/><path class="be7es10ib"/><path class="fwnb34_iv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:layout-template"} {...others} />);
}

export default Component;
